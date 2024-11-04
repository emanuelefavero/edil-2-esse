'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEstimateRequestEmail(formData: FormData) {
  const contactEmail = process.env.CONTACT_EMAIL as string
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const message = formData.get('message') as string

  // Send an email to the contact email address with the estimate request details
  try {
    await resend.emails.send({
      from: contactEmail, // TODO: Register a domain in Resend and use the email address from the domain
      to: contactEmail,
      subject: 'Richiesta di preventivo',
      text: `
        Nome: ${name}
        Email: ${email}
        Telefono: ${phone}
        Messaggio: ${message}
      `,
    })

    console.log('Estimate request email sent successfully')
  } catch (error) {
    console.error('Error sending estimate request email:', error)
  }
}
