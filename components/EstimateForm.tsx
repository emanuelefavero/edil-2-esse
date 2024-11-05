import { sendEstimateRequestEmail } from '@/app/actions'
import Button from '@/components/Button'
import Input from '@/components/Input'

export default function Component() {
  // TODO Add form submission loading state with useFormStatus hook
  // TODO Add form validation client and server side (simply use html and css for client side?)
  // TODO Add form submission success and error messages
  // TODO Create Input and Label components for name, phone, email

  return (
    <div className='w-full flex justify-center mt-20'>
      <form action={sendEstimateRequestEmail} className='w-full max-w-[788px]'>
        <div className='flex flex-wrap -mx-2'>
          <Input name='name' label='Nome' placeholder='Il tuo nome' required />
          <Input
            type='tel'
            name='phone'
            label='Telefono'
            placeholder='Il tuo numero di telefono'
            pattern='^(\+39\s?)?((3\d{2}\s?\d{6,7})|(0\d{1,4}\s?\d{5,10}))$'
          />
          <Input
            type='email'
            name='email'
            label='Email'
            placeholder='La tua email'
            required
          />
        </div>

        {/* Full-width message textarea */}
        <div>
          <label
            htmlFor='message'
            className='block text-sm font-medium text-stone-700 dark:text-stone-200 mb-2'
          >
            Messaggio{' '}
            <span className='text-yellow-600 dark:text-yellow-500'>*</span>
          </label>
          <textarea
            name='message'
            className='w-full px-2.5 py-2 font-medium dark:bg-stone-800 text-stone-700 dark:text-stone-200 border border-stone-500/35 rounded-lg focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-yellow-600 dark:focus:border-yellow-700 placeholder:text-stone-400 dark:placeholder:text-stone-500'
            rows={4}
            placeholder='Il tuo messaggio'
            required
          />
        </div>

        {/* Submit button */}
        <div className='flex justify-end mt-5'>
          <Button
            type='submit'
            className='w-full xs:max-w-fit text-sm 5xs:text-md 3xs:text-lg'
          >
            Invia <span className='hidden 3xs:inline'>richiesta</span>
          </Button>
        </div>
      </form>
    </div>
  )
}
