import { render, screen } from '@testing-library/react'
import Component from './DropdownMenu'
import { useDarkMode } from '@/hooks/useDarkMode'

// NOTE: Since the dropdown menu is a Radix UI component that renders a portal, testing this component is more complex. We already tested the menu items in the Menu component, so we decided to only test the trigger button in this component.

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
