import EstimateForm from '@/components/EstimateForm'

export default function Component() {
  return (
    <section className='bg-stone-100 text-stone-800 border-b-[2.5px] border-yellow-700/60 dark:border-yellow-700/80 px-8 2xl:px-16 py-36 flex justify-center items-center font-semibold'>
      <div className='w-full max-w-screen-2xl flex flex-col items-center justify-center'>
        <h2 className='text-sm 5xs:text-[2rem] leading-10 font-bold text-center'>
          Richiedi un preventivo{' '}
          <span className='text-yellow-600'>gratuito</span>
        </h2>

        <EstimateForm />
      </div>
    </section>
  )
}
