import { render, screen } from '@testing-library/react'
import { useRouter } from 'next/navigation'
import Component from './HeroButton'

// Mock the `useRouter` hook from Next.js
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

// Mock the `push` method from the `useRouter` hook
const push = jest.fn()
;(useRouter as jest.Mock).mockReturnValue({ push })

describe('Component', () => {
  it('renders the button with the correct text', () => {
    render(<Component />)

    // Check for both the hidden and visible text in the button
    expect(screen.getByText('SERVIZI')).toBeInTheDocument()
    expect(screen.getByText('I NOSTRI')).toBeInTheDocument()
  })
})
