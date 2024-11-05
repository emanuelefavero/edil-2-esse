import { sendEstimateRequestEmail } from '@/app/actions'

export default function Component() {
  // TODO Style the form (see figma design)
  // TODO Add form validation
  // TODO Add form submission success and error messages
  // TODO Add form submission loading state with useFormStatus hook
  return (
    <form
      action={sendEstimateRequestEmail}
      className='w-full max-w-prose flex flex-wrap gap-16 bg-red-500 mt-20'
    >
      <input
        type='text'
        name='name'
        placeholder='Nome'
        className='text-black max-w-prose'
      />
      <input
        type='email'
        name='email'
        placeholder='Email'
        required
        className='text-black max-w-prose'
      />
      <input
        type='tel'
        name='phone'
        placeholder='Telefono'
        className='text-black max-w-prose'
      />
      <textarea
        name='message'
        placeholder='Messaggio'
        required
        className='text-black max-w-prose'
      ></textarea>
      <button type='submit'>Invia</button>
    </form>
  )
}
