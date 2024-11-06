import { sendEstimateRequestEmail } from '@/app/actions'
import Button from '@/components/Button'
import Input from '@/components/Input'
import TextArea from '@/components/TextArea'

export default function Component() {
  // TODO Add form submission loading state with useFormStatus hook
  // TODO Add server side form validation
  // TODO Add form submission success and error messages
  // TODO Refactor this component (use loop to render inputs?)

  return (
    <div className='w-full flex justify-center mt-20'>
      <form
        action={sendEstimateRequestEmail}
        className='w-full max-w-[788px] group'
      >
        <div className='flex flex-wrap -mx-2'>
          <Input
            name='name'
            label='Nome'
            placeholder='Il tuo nome'
            validationMessage='Inserisci il tuo nome'
            required
          />
          <Input
            type='tel'
            name='phone'
            label='Telefono'
            placeholder='Il tuo numero di telefono'
            validationMessage='Inserisci un numero valido'
            pattern='^(\+39\s?)?((3\d{2}\s?\d{6,7})|(0\d{1,4}\s?\d{5,10}))$'
          />
          <Input
            type='email'
            name='email'
            label='Email'
            placeholder='La tua email'
            validationMessage='Inserisci un email valida'
            required
          />
        </div>

        <TextArea
          name='message'
          label='Messaggio'
          placeholder='Il tuo messaggio'
          validationMessage='Inserisci un messaggio'
          required
          rows={5}
        />

        <div className='flex justify-end mt-5'>
          <Button
            type='submit'
            className='w-full xs:max-w-fit text-sm 5xs:text-md 3xs:text-lg group-invalid:pointer-events-none group-invalid:opacity-60 dark:group-invalid:opacity-50'
          >
            Invia <span className='hidden 3xs:inline'>richiesta</span>
          </Button>
        </div>
      </form>
    </div>
  )
}
