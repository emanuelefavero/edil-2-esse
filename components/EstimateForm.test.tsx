import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import EstimateForm from './EstimateForm'

describe('EstimateForm client side validation', () => {
  beforeAll(() => {
    render(<EstimateForm />)
  })

  it('should show validation messages for required fields if left empty', async () => {
    const submitButton = screen.getByRole('button', {
      name: /\b(invia richiesta)\b/i,
    })

    fireEvent.click(submitButton)

    await waitFor(() => {
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
  })
})
