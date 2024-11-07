import Banner from '@/components/Banner'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import EstimateFormSection from '@/components/EstimateFormSection'

export default function Home() {
  // TODO: Add contacts section with id='contatti'
  return (
    <>
      <HeroSection />
      <Banner />
      <ServicesSection />
      <EstimateFormSection />
    </>
  )
}
