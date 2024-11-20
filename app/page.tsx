import Banner from '@/components/Banner'
import ContactsSection from '@/components/ContactsSection'
import EstimateFormSection from '@/components/EstimateFormSection'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'

export default function Home() {
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
