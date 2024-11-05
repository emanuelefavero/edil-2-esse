import { sendEstimateRequestEmail } from '@/app/actions'

export default function Component() {
  // TODO add Button component as submit button
  // TODO validate italian phone number
  // TODO Add form validation
  // TODO Add form submission success and error messages
  // TODO Add form submission loading state with useFormStatus hook
  // TODO Create Input components for name, phone, email

  return (
    <div className='flex justify-center mt-20'>
      <form
        action={sendEstimateRequestEmail}
        className='w-full max-w-prose space-y-4'
      >
        {/* Flex container for inputs */}
        <div className='flex flex-wrap -mx-2'>
          <div className='w-full md:w-1/2 px-2 mb-4'>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-stone-700 mb-2'
            >
              Nome
            </label>
            <input
              type='text'
              name='name'
              className='w-full p-2 font-medium text-stone-700 border border-stone-500/35 rounded-lg focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-yellow-600 placeholder:text-stone-400'
              placeholder='Il tuo Nome'
              required
            />
          </div>
          <div className='w-full md:w-1/2 px-2 mb-4'>
            <label
              htmlFor='phone'
              className='block text-sm font-medium text-stone-700 mb-2'
            >
              Telefono
            </label>
            <input
              type='tel'
              name='phone'
              className='w-full p-2 font-medium text-stone-700 border border-stone-500/35 rounded-lg focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-yellow-600 placeholder:text-stone-400'
              placeholder='Il tuo numero di telefono'
            />
          </div>
          <div className='w-full md:w-1/2 px-2 mb-4'>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-stone-700 mb-2'
            >
              Email
            </label>
            <input
              type='email'
              name='email'
              className='w-full p-2 font-medium text-stone-700 border border-stone-500/35 rounded-lg focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-yellow-600 placeholder:text-stone-400'
              placeholder='La tua email'
              required
            />
          </div>
        </div>

        {/* Full-width message textarea */}
        <div>
          <label
            htmlFor='message'
            className='block text-sm font-medium text-stone-700 mb-2'
          >
            Messaggio
          </label>
          <textarea
            name='message'
            className='w-full p-2 font-medium text-stone-700 border border-stone-500/35 rounded-lg focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-yellow-600 placeholder:text-stone-400'
            rows={4}
            placeholder='Il tuo messaggio'
            required
          />
        </div>

        {/* Submit button */}
        <div className='flex justify-end'>
          <button
            type='submit'
            className='w-full md:w-1/2 p-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-500'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
