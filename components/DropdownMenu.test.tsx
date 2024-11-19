import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import DropdownMenu from './DropdownMenu'
import { useDarkMode } from '@/hooks/useDarkMode'
import { menuItems } from '@/data/menuItems'

// Mock useDarkMode hook
jest.mock('@/hooks/useDarkMode', () => ({
  useDarkMode: jest.fn(),
}))

describe('DropdownMenu', () => {
  beforeEach(() => {
    // Mock useDarkMode to return false (light mode)
    ;(useDarkMode as jest.Mock).mockReturnValue(false)

    render(<DropdownMenu />)
  })

  it('renders the trigger button', () => {
    const button = screen.getByLabelText(/Open dropdown menu/i)
    expect(button).toBeInTheDocument()
  })
})
