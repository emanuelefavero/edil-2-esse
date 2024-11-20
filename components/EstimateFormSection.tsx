import EstimateForm from '@/components/EstimateForm'

export default function Component() {
  return (
    <section
      id='preventivo'
      className='flex items-center justify-center bg-stone-100 px-8 py-36 font-semibold 2xl:px-16 dark:bg-stone-900'
    >
      <div className='flex w-full max-w-screen-2xl flex-col items-center justify-center'>
        <EstimateFormTitle />
        <EstimateForm />
      </div>
    </section>
  )
}

function EstimateFormTitle() {
  return (
    <h2 className='text-center text-sm font-bold leading-10 5xs:text-[2rem]'>
      Richiedi un preventivo{' '}
      <span className='text-yellow-600 dark:text-amber-500'>gratuito</span>
    </h2>
  )
}
