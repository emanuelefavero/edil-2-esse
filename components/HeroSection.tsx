import HeroButton from '@/components/HeroButton'

export default function Component() {
  // TODO change button to point to estimate request form?

  return (
    <section
      id='home'
      className='w-full h-[calc(100vh-126px)] min-h-[667px] max-h-[900px] pt-16 pb-4 px-10 flex flex-col justify-center items-center gap-10 bg-hero-image bg-cover bg-center'
    >
      <div className='text-center max-w-prose xl:scale-125 xl:mb-6'>
        <div className='mb-2 text-lg text-white text-shadow'>EDIL 2 ESSE</div>
        <h1 className='text-white font-semibold text-xl 5xs:text-3xl 4xs:text-4xl 2xs:text-5xl 5xs:leading-[2.3rem] 4xs:leading-[3rem] 2xs:leading-[3.3rem] mb-4 text-shadow-lg'>
          Impresa Edile Toscana
        </h1>
        <p className='font-[500] hidden 4xs:block text-lg text-pretty text-white text-shadow'>
          Servizi di ristrutturazione edilizia e costruzione di nuovi edifici
          nelle zone di Pisa, Livorno e provincia.
        </p>
      </div>

      <HeroButton />
    </section>
  )
}
