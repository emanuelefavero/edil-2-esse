import { render, screen } from '@testing-library/react'
import Component from './DropdownMenu'
import { useDarkMode } from '@/hooks/useDarkMode'

// Mock useDarkMode hook
jest.mock('@/hooks/useDarkMode', () => ({
  useDarkMode: jest.fn(),
}))

describe('DropdownMenu', () => {
  beforeEach(async () => {
    // Mock useDarkMode to return false (light mode)
    ;(useDarkMode as jest.Mock).mockReturnValue(false)

    render(<Component />)
  })

  it('renders the trigger button', () => {
    const button = screen.getByLabelText(/Open dropdown menu/i)
    expect(button).toBeInTheDocument()
  })
})
