import { sendEstimateRequestEmail } from '@/app/actions'
import Input from '@/components/Input'
import SubmitButton from '@/components/SubmitButton'
import TextArea from '@/components/TextArea'

export default function Component() {
  // TODO Refactor this component (use loop to render inputs?)

  return (
    <div className='mt-20 flex w-full justify-center'>
      <form
        action={sendEstimateRequestEmail}
        className='group w-full max-w-[788px]'
      >
        <div className='-mx-2 flex flex-wrap'>
          <Input
            name='name'
            label='Nome'
            placeholder='Il tuo nome'
            validationMessage='Inserisci il tuo nome'
            pattern="^[a-zA-ZÀ-ÿ\s\-']{2,50}$"
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
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
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

        <div className='mt-5 flex justify-end'>
          <SubmitButton className='5xs:text-md flex w-full items-center justify-center text-sm group-invalid:pointer-events-none group-invalid:opacity-60 3xs:text-lg xs:w-[169px] dark:group-invalid:opacity-50'>
            Invia <span className='hidden 3xs:inline'>&nbsp;richiesta</span>
          </SubmitButton>
        </div>
      </form>
    </div>
  )
}
