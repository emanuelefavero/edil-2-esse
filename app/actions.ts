'use server'

import { Resend } from 'resend'
import { createOwnerEmail, createUserEmail } from '@/utils/emails'

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
    const ownerEmailTemplate = createOwnerEmail(name, email, phone, message)
    const userEmailTemplate = createUserEmail(name, customDomainEmail)

    await Promise.all([
      resend.emails.send({
        from: customDomainEmail,
        to: customDomainEmail,
        subject: `Richiesta di preventivo da ${name}`,
        html: ownerEmailTemplate,
      }),
      resend.emails.send({
        from: customDomainEmail,
        to: email,
        subject: 'Richiesta di preventivo ricevuta',
        html: userEmailTemplate,
      }),
    ])

    console.log('Estimate request emails sent successfully')
  } catch (error) {
    console.error('Error sending estimate request email:', error)
  }
}
