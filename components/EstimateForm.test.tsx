import { render, screen, fireEvent } from '@testing-library/react'
import EstimateForm from './EstimateForm'

describe('EstimateForm client side validation', () => {
  beforeEach(() => {
    render(<EstimateForm />)
  })

  it('should show validation messages for required fields if left empty', () => {
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

  it('should show validation message for phone input if invalid', () => {
    const phoneInput = screen.getByLabelText(/(telefono)/i) as HTMLInputElement

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

  it('should check if email input is valid', () => {
    const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement

    // Test for invalid email
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } })
    fireEvent.blur(emailInput)

    // Check that the email is invalid and the validation message is visible
    expect(emailInput.checkValidity()).toBe(false)
    const emailValidationMessage = screen.getByText(
      /inserisci un email valida/i
    )
    expect(emailValidationMessage).toBeVisible()

    // Test for valid email
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } })
    fireEvent.blur(emailInput)

    // Check that the email is valid
    expect(emailInput.checkValidity()).toBe(true)

    // NOTE: The validation message always appear to be visible since we used TailwindCSS to dynamically show or hide it
  })
})
