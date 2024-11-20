import HeroButton from '@/components/HeroButton'

export default function Component() {
  // TODO change button to point to estimate request form?

  return (
    <section
      id='home'
      className='flex h-[calc(100vh-126px)] max-h-[900px] min-h-[667px] w-full flex-col items-center justify-center gap-10 bg-hero-image bg-cover bg-center px-10 pb-4 pt-16'
    >
      <div className='max-w-prose text-center xl:mb-6 xl:scale-125'>
        <div className='mb-2 text-lg text-white text-shadow'>EDIL 2 ESSE</div>
        <h1 className='mb-4 text-xl font-semibold text-white text-shadow-lg 5xs:text-3xl 5xs:leading-[2.3rem] 4xs:text-4xl 4xs:leading-[3rem] 2xs:text-5xl 2xs:leading-[3.3rem]'>
          Impresa Edile Toscana
        </h1>
        <p className='hidden text-pretty text-lg font-[500] text-white text-shadow 4xs:block'>
          Servizi di ristrutturazione edilizia e costruzione di nuovi edifici
          nelle zone di Pisa, Livorno e provincia.
        </p>
      </div>

      <HeroButton />
    </section>
  )
}
