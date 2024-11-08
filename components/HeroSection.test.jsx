import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import HeroSection from '@/components/HeroSection'

// Mock useRouter (imported by HeroButton)
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    }
  },
}))

describe('Hero Section', () => {
  it('renders the h1 heading', () => {
    render(<HeroSection />)

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toBeInTheDocument()
  })
})
