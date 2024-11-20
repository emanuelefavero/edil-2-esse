import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Component from './HeroButton'

describe('HeroButton', () => {
  it('renders the link with the correct text', () => {
    render(<Component />)
    const link = screen.getByRole('link', { name: /i nostri servizi/i })
    expect(link).toHaveTextContent('I NOSTRI SERVIZI')
  })

  it('renders the link with the correct href', () => {
    render(<Component />)
    const link = screen.getByRole('link', { name: /i nostri servizi/i })
    expect(link).toHaveAttribute('href', '/#servizi')
  })

  it('navigates to the correct section when clicked', async () => {
    render(<Component />)
    const link = screen.getByRole('link', { name: /i nostri servizi/i })
    await userEvent.click(link)
    expect(window.location.hash).toBe('#servizi')
  })
})
