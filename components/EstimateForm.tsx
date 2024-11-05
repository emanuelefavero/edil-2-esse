import { sendEstimateRequestEmail } from '@/app/actions'

export default function Component() {
  // TODO Style dark mode form
  // TODO add Button component as submit button
  // TODO Add form validation
  // TODO Add form submission success and error messages
  // TODO Add form submission loading state with useFormStatus hook
  // TODO Create Input components for name, phone, email

  return (
    <div className='flex justify-center mt-16'>
      <form
        action={sendEstimateRequestEmail}
        className='w-full max-w-screen-lg'
      >
        {/* Flex container for inputs */}
        <div className='flex flex-wrap -mx-2 mb-4'>
          <div className='w-full md:w-1/2 px-2 mb-4'>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-stone-700 mb-2'
            >
              Nome <span className='text-yellow-600'>*</span>
            </label>
            <input
              type='text'
              name='name'
              className='w-full px-2.5 py-2 font-medium text-stone-700 border border-stone-500/35 rounded-lg focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-yellow-600 placeholder:text-stone-400'
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
              className='w-full px-2.5 py-2 font-medium text-stone-700 border border-stone-500/35 rounded-lg focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-yellow-600 placeholder:text-stone-400'
              placeholder='Il tuo numero di telefono'
              pattern='^(\+39\s?)?((3\d{2}\s?\d{6,7})|(0\d{1,4}\s?\d{5,10}))$'
            />
          </div>
          <div className='w-full md:w-1/2 px-2'>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-stone-700 mb-2'
            >
              Email <span className='text-yellow-600'>*</span>
            </label>
            <input
              type='email'
              name='email'
              className='w-full px-2.5 py-2 font-medium text-stone-700 border border-stone-500/35 rounded-lg focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-yellow-600 placeholder:text-stone-400'
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
            Messaggio <span className='text-yellow-600'>*</span>
          </label>
          <textarea
            name='message'
            className='w-full px-2.5 py-2 font-medium text-stone-700 border border-stone-500/35 rounded-lg focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-yellow-600 placeholder:text-stone-400'
            rows={4}
            placeholder='Il tuo messaggio'
            required
          />
        </div>

        {/* Submit button */}
        <div className='flex justify-end mt-4'>
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
