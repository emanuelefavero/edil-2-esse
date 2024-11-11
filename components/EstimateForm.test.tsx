import { render, screen, fireEvent } from '@testing-library/react'
import EstimateForm from './EstimateForm'

describe('EstimateForm client side validation', () => {
  beforeEach(() => {
    render(<EstimateForm />)
  })

  it('should show validation messages for required fields if left empty', async () => {
    const submitButton = screen.getByRole('button', {
      name: /\b(invia richiesta)\b/i,
    })

    fireEvent.click(submitButton)

    const nameValidationMessage = screen.getByText(/(inserisci il tuo nome)/i)
    const emailValidationMessage = screen.getByText(
      /(inserisci un email valida)/i
    )
    const messageValidationMessage = screen.getByText(
      /(inserisci un messaggio)/i
    )

    expect(nameValidationMessage).toBeVisible()
    expect(emailValidationMessage).toBeVisible()
    expect(messageValidationMessage).toBeVisible()
  })

  it('should show validation message for phone input if invalid', async () => {
    const phoneInput = screen.getByLabelText(/(telefono)/i)

    // Enter invalid phone number
    fireEvent.change(phoneInput, {
      target: { value: '123' },
    })

    fireEvent.blur(phoneInput) // blur input to trigger validation

    // Check if validation message is visible
    const phoneValidationMessage = screen.getByText(
      /(inserisci un numero valido)/i
    )
    expect(phoneValidationMessage).toBeVisible()
  })
})
