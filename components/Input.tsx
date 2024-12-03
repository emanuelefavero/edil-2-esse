import clsx from 'clsx'
import { Ref } from 'react'

interface Props {
  name: string
  label: string
  type?: 'text' | 'email' | 'tel'
  placeholder?: string
  required?: boolean
  pattern?: string
  ref?: Ref<HTMLInputElement>
  disabled?: boolean
  className?: string
  autocomplete?: 'on' | 'off'
  maxLength?: number
  minLength?: number
  validationMessage?: string
}

export default function Component({
  name,
  label,
  type = 'text',
  placeholder = '',
  required = false,
  pattern,
  ref,
  disabled = false,
  className,
  autocomplete = 'on',
  maxLength = 50,
  minLength = 2,
  validationMessage,
}: Props) {
  return (
    <div className='relative mb-5 w-full px-2 md:w-1/2'>
      <label
        htmlFor={name}
        className='mb-2 mr-2 block select-none text-sm font-medium text-stone-700 dark:text-stone-200'
      >
        {label}{' '}
        {required && (
          <span className='text-yellow-600 dark:text-yellow-500'>*</span>
        )}
      </label>

      <input
        type={type}
        id={name}
        name={name}
        className={clsx(
          'peer w-full rounded-lg border border-stone-500/35 px-2.5 py-2 font-medium text-stone-700 placeholder:text-stone-400 focus:border-yellow-600 focus:outline-none focus:ring-0 focus:ring-offset-0 dark:bg-stone-800 dark:text-stone-200 dark:placeholder:text-stone-500 dark:focus:border-yellow-700 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 dark:invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-700',
          className,
          disabled && 'cursor-not-allowed opacity-50',
        )}
        ref={ref}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        disabled={disabled}
        autoComplete={autocomplete}
        maxLength={maxLength}
        minLength={minLength}
      />

      {validationMessage && (
        <span className='absolute -top-0 right-3 hidden text-sm font-medium text-red-600 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block dark:text-red-500'>
          {validationMessage}
        </span>
      )}
    </div>
  )
}
