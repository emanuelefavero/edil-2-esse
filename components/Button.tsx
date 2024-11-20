import clsx from 'clsx'
import { ReactNode, Ref } from 'react'

interface Props {
  children: ReactNode
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  ariaLabel?: string
  disabled?: boolean
  className?: string
  ref?: Ref<HTMLButtonElement>
}

export default function Component({
  children,
  type = 'button',
  onClick,
  ariaLabel,
  disabled = false,
  className,
  ref,
}: Props) {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        aria-label={ariaLabel}
        disabled={disabled}
        className={clsx(
          'select-none rounded-lg border-[1px] border-amber-400 bg-yellow-700 px-5 py-1.5 text-lg font-[600] tracking-wide text-white shadow-[0.5px_0.5px_0.5px_0.8px] shadow-yellow-800/80 outline-none transition-all duration-200 text-shadow-yellow hover:bg-yellow-600 focus:bg-yellow-600 active:translate-y-0.5 active:scale-[0.99] active:transform active:shadow-none',
          className,
          disabled && 'cursor-not-allowed opacity-50',
        )}
        ref={ref}
      >
        {children}
      </button>
    </>
  )
}
