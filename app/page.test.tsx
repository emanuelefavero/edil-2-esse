import { render, screen } from '@testing-library/react'
import Page from './page'

// NOTE: Jest mocking functions were moved to @/jest.setup.ts

describe('Page', () => {
  it('renders the h1 heading', () => {
    render(<Page />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })
})
