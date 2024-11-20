import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import Component from './HeroButton'

describe('Component', () => {
  it('renders the link with the correct text', () => {
    render(<Component />)
    const link = screen.getByRole('link', { name: /i nostri servizi/i })
    expect(link).toHaveTextContent('I NOSTRI SERVIZI')
  })
})
