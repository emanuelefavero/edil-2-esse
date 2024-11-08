import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from './page'

// Mock Resend
jest.mock('resend', () => {
  return {
    Resend: jest.fn().mockImplementation(() => ({
      emails: { send: jest.fn() },
    })),
  }
})

// Mock next/navigation
jest.mock('next/navigation', () => {
  return {
    __esModule: true,
    usePathname: () => ({
      pathname: '',
    }),
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    }),
    useSearchParams: () => ({
      get: () => {},
    }),
  }
})

describe('Page', () => {
  it('renders the h1 heading', () => {
    render(<Page />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })
})
