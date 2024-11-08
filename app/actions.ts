'use server'

import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { Resend } from 'resend'
import {
  createEstimateRequestEmail,
  createEstimateRequestConfirmationEmail,
} from '@/utils/emails'
import { capitalize } from '@/utils/capitalize'
import { isValidEmail, isValidPhoneNumber } from '@/utils/validation'

const resend = new Resend(process.env.RESEND_API_KEY)
const customDomainEmail = process.env.CUSTOM_DOMAIN_EMAIL as string

export async function sendEstimateRequestEmail(formData: FormData) {
  const cookieStore = await cookies() // get cookies

  // * Get form data
  const name = capitalize(formData.get('name') as string)
  const email = formData.get('email') as string
  const message = formData.get('message') as string
  let phone = formData.get('phone') as string

  // * Validate form data
  if (!name || !email || !message) {
    throw new Error('Required form fields are missing.')
  }

  if (!isValidEmail(email)) {
    throw new Error('Invalid email address.')
  }

  if (phone && !isValidPhoneNumber(phone)) {
    console.warn('Invalid phone number:', phone)
    phone += ' (Non valido)' // ? mark phone number as invalid
  }

  // * Create email templates
  const estimateRequestEmail = createEstimateRequestEmail(
    name,
    email,
    message,
    phone
  )
  const estimateRequestConfirmationEmail =
    createEstimateRequestConfirmationEmail(name, customDomainEmail)

  // * Send emails
  try {
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
    console.error('Error sending estimate request emails:', error)
    throw new Error('Failed to send estimate request emails.')
  }

  // * Set cookie to access success page (@see @/middleware.ts)
  cookieStore.set('formSubmitted', 'true', {
    maxAge: 60 * 2, // 2 minutes
  })

  // * Redirect to success page
  redirect(`/success?name=${name}&email=${email}`)
}
