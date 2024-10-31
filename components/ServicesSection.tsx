import GiDrillIcon from './icons/GiDrillIcon'

export default function Component() {
  return (
    <section className='w-full max-w-screen-2xl flex items-center justify-center flex-col px-8 py-20'>
      <ServicesTitle />
    </section>
  )
}

function ServicesTitle() {
  return (
    <div className='xl:scale-125'>
      <div className='flex justify-center items-center'>
        <div className='hidden 5xs:block text-yellow-700 dark:text-yellow-500 font-semibold whitespace-nowrap mr-3'>
          Cosa offriamo
        </div>
        <div className='hidden 3xs:block bg-yellow-700 dark:bg-yellow-500 h-0.5 w-full'></div>
      </div>

      <h2 className='text-sm 5xs:text-[2rem] leading-10 font-bold uppercase text-center'>
        I Nostri Servizi
      </h2>
    </div>
  )
}

function ServicesList() {}
