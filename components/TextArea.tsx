import clsx from 'clsx'
import { Ref } from 'react'

interface Props {
  name: string
  label: string
  placeholder?: string
  className?: string
  required?: boolean
  ref?: Ref<HTMLTextAreaElement>
  disabled?: boolean
  rows?: number
  maxLength?: number
  minLength?: number
  validationMessage?: string
}

export default function Component({
  name,
  label,
  placeholder = '',
  className,
  required = false,
  ref,
  disabled = false,
  rows = 4,
  maxLength = 600,
  minLength = 3,
  validationMessage,
}: Props) {
  return (
    <div className='relative'>
      <label
        htmlFor={name}
        className='mb-2 block select-none text-sm font-medium text-stone-700 dark:text-stone-200'
      >
        {label}{' '}
        {required && (
          <span className='text-yellow-600 dark:text-yellow-500'>*</span>
        )}
      </label>
      <textarea
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
        disabled={disabled}
        rows={rows}
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
