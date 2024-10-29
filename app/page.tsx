import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'

export default function Home() {
  return (
    <div>
      <Header />

      <main>
        <HeroSection />
        <section className='bg-yellow-600 text-white h-[150px] flex justify-center items-center text-5xl font-semibold'>
          Banner
        </section>
      </main>
    </div>
  )
}
