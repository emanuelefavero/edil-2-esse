import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Menu from './Menu'
import { menuItems } from '@/data/menuItems'

describe('Menu', () => {
  it('should navigate to the correct section', () => {
    render(<Menu />)

    menuItems.forEach((item) => {
      // Get the link element
      const link = screen.getByText(item.label)

      // Click on the link element
      fireEvent.click(link)

      // Wait for the URL to change and the section to be in the viewport
      waitFor(() => {
        // Check if the URL has changed
        expect(window.location.href).toContain(item.id)

        // Check if the section is in the viewport
        const section = screen.getByTestId(item.id)
        expect(section).toBeVisible()
      })
    })
  })
})
