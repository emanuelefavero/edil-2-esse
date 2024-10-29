import Button from '@/components/Button'

export default function Component() {
  return (
    <section className='w-full h-[calc(100vh-104px)] pt-8 flex flex-col justify-center items-center gap-10 bg-hero-image bg-cover bg-center'>
      <div className='max-w-72 text-center'>
        <div className='mb-2 text-lg text-white text-shadow'>EDIL 2 ESSE</div>
        <h1 className='text-white font-semibold text-5xl leading-[3.3rem] mb-4 text-shadow-lg'>
          Impresa Edile Toscana
        </h1>
        <p className='font-[500] text-lg text-pretty text-white text-shadow'>
          Servizi di ristrutturazione edilizia e costruzione di nuovi edifici
          nelle zone di Pisa, Livorno e provincia.
        </p>
      </div>

      <Button>I NOSTRI SERVIZI</Button>
    </section>
  )
}
