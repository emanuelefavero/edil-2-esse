import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Menu from './Menu'
import { menuItems } from '@/data/menuItems'

describe('Menu', () => {
  beforeEach(() => {
    render(<Menu />)
  })

  it('renders the menu items', () => {
    menuItems.forEach((item) => {
      const link = screen.getByText(item.label)
      expect(link).toBeInTheDocument()
    })
  })

  it('should navigate to the correct section', () => {
    menuItems.forEach(async (item) => {
      // Get the link element
      const link = screen.getByText(item.label)

      // Click on the link element
      fireEvent.click(link)

      // Wait for the URL to change and the section to be in the viewport
      await waitFor(() => {
        // Check if the URL has changed
        expect(window.location.href).toContain(item.id)

        // Check if the section is in the viewport
        const section = screen.getByTestId(item.id)
        expect(section).toBeVisible()
      })
    })
  })
})
