import Banner from '@/components/Banner'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import EstimateFormSection from '@/components/EstimateFormSection'
import ContactsSection from '@/components/ContactsSection'

export default function Home() {
  // TODO: Add contacts section with id='contatti'
  return (
    <>
      <HeroSection />
      <Banner />
      <ServicesSection />
      <EstimateFormSection />
      <ContactsSection />
    </>
  )
}
