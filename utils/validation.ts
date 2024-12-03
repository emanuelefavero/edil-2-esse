// Validate name
export function isValidName(name: string): boolean {
  const nameRegex = /^[a-zA-ZÀ-ÿ\s\-']{2,50}$/
  return nameRegex.test(name)
}

// Validate email
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email)
}

// Validate phone number (Italian format)
export function isValidPhoneNumber(phone: string): boolean {
  const phoneRegex = /^(\+39\s?)?((3\d{2}\s?\d{6,7})|(0\d{1,4}\s?\d{5,10}))$/
  return phoneRegex.test(phone)
}
