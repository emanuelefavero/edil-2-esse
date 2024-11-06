import { Ref } from 'react'
import clsx from 'clsx'

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
  maxLength = 100,
  minLength = 2,
  validationMessage,
}: Props) {
  return (
    <div className='w-full md:w-1/2 px-2 mb-5 relative'>
      <label
        htmlFor={name}
        className='block text-sm font-medium text-stone-700 dark:text-stone-200 select-none mb-2 mr-2'
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
          'w-full px-2.5 py-2 font-medium dark:bg-stone-800 text-stone-700 dark:text-stone-200 border border-stone-500/35 rounded-lg focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-yellow-600 dark:focus:border-yellow-700 placeholder:text-stone-400 dark:placeholder:text-stone-500 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 dark:invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-700 peer',
          className,
          disabled && 'opacity-50 cursor-not-allowed'
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
        <span className='text-sm font-medium text-red-500 right-3 absolute -top-0 hidden peer-[&:not(:placeholder-shown):not(:focus):invalid]:block'>
          {validationMessage}
        </span>
      )}
    </div>
  )
}
