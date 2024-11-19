import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

  it('redirects to "/#servizi" when clicked', async () => {
    render(<Component />)

    // Simulate a user click on the button
    const button = screen.getByRole('button', { name: /i nostri servizi/i })
    await userEvent.click(button)

    // Ensure the `push` method was called with the correct URL
    expect(push).toHaveBeenCalledWith('/#servizi')
  })
})
