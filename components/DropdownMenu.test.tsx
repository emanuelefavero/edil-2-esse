import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import DropdownMenu from './DropdownMenu'
import { menuItems } from '@/data/menuItems'

describe('DropdownMenu', () => {
  // Mock matchMedia (needed for this component)
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    })
  })

  it('renders the menu items', () => {
    render(<DropdownMenu />)

    const dropdownMenuTrigger = screen.getByTestId('dropdown-menu-trigger')
    fireEvent.click(dropdownMenuTrigger)

    waitFor(() => {
      menuItems.forEach((item) => {
        const link = screen.getByText(item.label)
        expect(link).toBeInTheDocument()
      })
    })
  })
})
