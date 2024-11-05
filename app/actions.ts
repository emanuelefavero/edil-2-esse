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

  try {
    // Send an email to the owner with the estimate request details
    const ownerEmail = `
        <h1>Dettagli della richiesta:</h1>

        <p>
          <b>Nome:</b> ${name}
        </p>

        <p>
          <b>Email:</b> ${email}
        </p>

        <p>
          <b>Telefono:</b> ${phone || 'Non specificato'}
        </p>

        <p>
          <b>Messaggio:</b> ${message}
        </p>

        <p>
          <b>Per rispondere:</b>
        </p>

        <a href="mailto:${email}">
          ${email}
        </a>
      `

    await resend.emails.send({
      from: customDomainEmail,
      to: customDomainEmail,
      subject: `Richiesta di preventivo da ${name}`,
      html: ownerEmail,
    })

    // Send an email to the user to confirm that their estimate request was received
    const userEmail = `
        <img src="https://www.edil2esse.it/logo.png" alt="Logo" width="125" height="72">

        <h1>
          Ciao <b>${name}</b>, abbiamo ricevuto il tuo messaggio!
        </h1>

        <p>Grazie per averci contattato. Ti risponderemo il prima possibile.</p>

        <p>
          Nel frattempo, se hai bisogno di contattarci, scrivici pure a questo indirizzo:
        </p>

        <a href="mailto:${customDomainEmail}">
          ${customDomainEmail}
        </a>

        <p>A presto e grazie ancora per averci scelto!</p>

        <p>Il team di <b>EDIL 2 ESSE</b></p>

        <a href="https://www.edil2esse.it">
          edil2esse.it
        </a>
      `

    await resend.emails.send({
      from: customDomainEmail,
      to: email,
      subject: 'Richiesta di preventivo ricevuta',
      html: userEmail,
    })

    console.log('Estimate request email sent successfully')
  } catch (error) {
    console.error('Error sending estimate request email:', error)
  }
}
