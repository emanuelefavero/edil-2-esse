import Banner from '@/components/Banner'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import EstimateFormSection from '@/components/EstimateFormSection'
import ContactsSection from '@/components/ContactsSection'

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
