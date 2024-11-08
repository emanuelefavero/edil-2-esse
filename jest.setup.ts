import '@testing-library/jest-dom'

// Mock Resend
jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: { send: jest.fn() },
  })),
}))

// Mock next/navigation
jest.mock('next/navigation', () => ({
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
}))
