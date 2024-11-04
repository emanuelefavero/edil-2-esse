import { sendEstimateRequestEmail } from '@/app/actions'

export default function Component() {
  return (
    <form action={sendEstimateRequestEmail}>
      <input
        type='text'
        name='name'
        placeholder='Nome'
        className='text-black'
      />
      <input
        type='email'
        name='email'
        placeholder='Email'
        required
        className='text-black'
      />
      <input
        type='tel'
        name='phone'
        placeholder='Telefono'
        className='text-black'
      />
      <textarea
        name='message'
        placeholder='Messaggio'
        required
        className='text-black'
      ></textarea>
      <button type='submit'>Invia</button>
    </form>
  )
}
