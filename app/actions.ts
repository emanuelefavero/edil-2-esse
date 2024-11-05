'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEstimateRequestEmail(formData: FormData) {
  // TODO add form validation
  const customDomainEmail = process.env.CUSTOM_DOMAIN_EMAIL as string
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const message = formData.get('message') as string

  // Send an email to the contact email address with the estimate request details
  try {
    await resend.emails.send({
      from: customDomainEmail,
      to: customDomainEmail,
      subject: `Richiesta di preventivo da ${name}`,

      // TODO Replace email text with html or react (see resend documentation)
      text: `
        Nome: ${name}
        Email: ${email}
        Telefono: ${phone || 'Non specificato'}
        Messaggio: ${message}
      `,
    })

    // Send an email to the user to confirm that their estimate request was received
    await resend.emails.send({
      from: customDomainEmail,
      to: email,
      subject: 'Richiesta di preventivo ricevuta',

      // TODO Replace email text with html or react (see resend documentation)
      text: `
        Ciao ${name},

        Grazie per aver richiesto un preventivo. Abbiamo ricevuto la tua richiesta e ti contatteremo al più presto.

        Cordiali saluti,
        Il team di Edil 2 Esse
      `,
    })

    console.log('Estimate request email sent successfully')
  } catch (error) {
    console.error('Error sending estimate request email:', error)
  }
}
