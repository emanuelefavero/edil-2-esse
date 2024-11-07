import EstimateForm from '@/components/EstimateForm'

export default function Component() {
  return (
    <section
      id='preventivo'
      className='bg-stone-100 dark:bg-stone-900 px-8 2xl:px-16 py-36 flex justify-center items-center font-semibold'
    >
      <div className='w-full max-w-screen-2xl flex flex-col items-center justify-center'>
        <EstimateFormTitle />
        <EstimateForm />
      </div>
    </section>
  )
}

function EstimateFormTitle() {
  return (
    <h2 className='text-sm 5xs:text-[2rem] leading-10 font-bold text-center'>
      Richiedi un preventivo{' '}
      <span className='text-yellow-600 dark:text-amber-500'>gratuito</span>
    </h2>
  )
}
