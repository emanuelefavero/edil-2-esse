import React from 'react'

interface Props {
  className?: string
}

export default function Component({ className }: Props) {
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 250 250'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`fill-yellow-600 dark:fill-yellow-600 ${className}`}
    >
      <path d='M241.211 8.79883L191.895 8.84912V58.1055H241.211V8.79883ZM183.105 8.85742L66.8945 8.97803V58.1055H183.105V8.85742ZM58.1055 8.9873L8.78906 9.03809V58.1055H58.1055V8.9873ZM8.78906 66.8945V120.605H120.605V66.8945H8.78906ZM129.395 66.8945V120.605H241.211V66.8945H129.395ZM8.78906 129.395V183.105H58.1055V129.395H8.78906ZM66.8945 129.395V183.105H183.105V129.395H66.8945ZM191.895 129.395V183.105H241.211V129.395H191.895ZM8.78906 191.895V241.201L120.605 241.086V191.895H8.78906ZM129.395 191.895V241.078L241.211 240.962V191.895H129.395Z' />
    </svg>
  )
}
