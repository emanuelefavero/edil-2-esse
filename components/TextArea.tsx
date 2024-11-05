import { Ref } from 'react'
import clsx from 'clsx'

interface Props {
  name: string
  label: string
  placeholder?: string
  className?: string
  required?: boolean
  ref?: Ref<HTMLTextAreaElement>
  disabled?: boolean
  rows?: number
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
}: Props) {
  return (
    <div>
      <label
        htmlFor={name}
        className='block text-sm font-medium text-stone-700 dark:text-stone-200 mb-2'
      >
        {label}{' '}
        {required && (
          <span className='text-yellow-600 dark:text-yellow-500'>*</span>
        )}
      </label>
      <textarea
        name={name}
        className={clsx(
          'w-full px-2.5 py-2 font-medium dark:bg-stone-800 text-stone-700 dark:text-stone-200 border border-stone-500/35 rounded-lg focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-yellow-600 dark:focus:border-yellow-700 placeholder:text-stone-400 dark:placeholder:text-stone-500',
          className,
          disabled && 'opacity-50 cursor-not-allowed'
        )}
        ref={ref}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        rows={rows}
      />
    </div>
  )
}
