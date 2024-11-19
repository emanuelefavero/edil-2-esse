import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Component from './DropdownMenu'
import { useDarkMode } from '@/hooks/useDarkMode'
import { menuItems } from '@/data/menuItems'

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

  it('renders the menu items', () => {
    // Open menu
    const button = screen.getByLabelText(/Open dropdown menu/i)
    fireEvent.click(button)

    // Wait for the menu to open
    waitFor(() => {
      menuItems.forEach((item) => {
        const link = screen.getByText(item.label)
        expect(link).toBeInTheDocument()
      })
    })
  })
})
