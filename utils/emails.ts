export function createEstimateRequestEmail(
  name: string,
  email: string,
  message: string,
  phone?: string,
): string {
  return `
    <h1>Dettagli della richiesta:</h1>
    <p><b>Nome:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Telefono:</b> ${phone || 'Non specificato'}</p>
    <p><b>Messaggio:</b> ${message}</p>
    <p><b>Per rispondere:</b></p>
    <a href="mailto:${email}">${email}</a>
  `
}

export function createEstimateRequestConfirmationEmail(
  name: string,
  customDomainEmail: string,
): string {
  return `
    <img src="https://www.edil2esse.it/logo.png" alt="Logo" width="125" height="72">
    <h1>Ciao <b>${name}</b>, abbiamo ricevuto il tuo messaggio!</h1>
    <p>Grazie per averci contattato. Ti risponderemo il prima possibile.</p>
    <p>Nel frattempo, se hai bisogno di contattarci, scrivici pure a questo indirizzo:</p>
    <a href="mailto:${customDomainEmail}">${customDomainEmail}</a>
    <p>A presto e grazie ancora per averci scelto!</p>
    <p>Il team di <b>EDIL 2 ESSE</b></p>
    <a href="https://www.edil2esse.it">edil2esse.it</a>
  `
}
