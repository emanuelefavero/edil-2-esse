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
}

export default function Component({
  name,
  label,
  type = 'text',
  placeholder = '',
  required = false,
  pattern = '',
  ref,
  disabled = false,
  className,
  autocomplete = 'on',
}: Props) {
  return (
    <div className='w-full md:w-1/2 px-2 mb-5'>
      <label
        htmlFor={name}
        className='block text-sm font-medium text-stone-700 dark:text-stone-200 mb-2'
      >
        {label}{' '}
        {required && (
          <span className='text-yellow-600 dark:text-yellow-500'>*</span>
        )}
      </label>
      <input
        type={type}
        name={name}
        className={clsx(
          'w-full px-2.5 py-2 font-medium dark:bg-stone-800 text-stone-700 dark:text-stone-200 border border-stone-500/35 rounded-lg focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-yellow-600 dark:focus:border-yellow-700 placeholder:text-stone-400 dark:placeholder:text-stone-500',
          className,
          disabled && 'opacity-50 cursor-not-allowed'
        )}
        ref={ref}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        disabled={disabled}
        autoComplete={autocomplete}
      />
    </div>
  )
}
