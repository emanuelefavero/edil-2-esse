'use server'

import { redirect } from 'next/navigation'
import { Resend } from 'resend'
import {
  createEstimateRequestEmail,
  createEstimateRequestConfirmationEmail,
} from '@/utils/emails'

const resend = new Resend(process.env.RESEND_API_KEY)
const customDomainEmail = process.env.CUSTOM_DOMAIN_EMAIL as string

export async function sendEstimateRequestEmail(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const message = formData.get('message') as string

  if (!name || !email || !message) {
    throw new Error('Required form fields are missing.')
  }

  try {
    const estimateRequestEmail = createEstimateRequestEmail(
      name,
      email,
      message,
      phone
    )
    const estimateRequestConfirmationEmail =
      createEstimateRequestConfirmationEmail(name, customDomainEmail)

    await Promise.all([
      resend.emails.send({
        from: customDomainEmail,
        to: customDomainEmail, // send details to owner
        subject: `Richiesta di preventivo da ${name}`,
        html: estimateRequestEmail,
      }),
      resend.emails.send({
        from: customDomainEmail,
        to: email, // send confirmation to user
        subject: 'Richiesta di preventivo ricevuta',
        html: estimateRequestConfirmationEmail,
      }),
    ])

    console.log('Estimate request emails sent successfully')
  } catch (error) {
    console.error('Error sending estimate request email:', error)
  }

  // NOTE: redirect needs to be called outside of try/catch block
  redirect(`/success?name=${name}&email=${email}`)
}
