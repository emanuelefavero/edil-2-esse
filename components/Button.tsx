import { ReactNode, Ref } from 'react'
import clsx from 'clsx'

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
          'bg-yellow-700 border-[1px] border-amber-400 text-white shadow-[0.5px_0.5px_0.5px_0.8px] shadow-yellow-800/80 text-shadow-yellow font-[600] text-lg tracking-wide px-5 py-1.5 rounded-lg select-none hover:bg-yellow-600 duration-200 active:transform active:translate-y-0.5 active:scale-[0.99] active:shadow-none transition-all',
          className,
          disabled && 'opacity-50 cursor-not-allowed'
        )}
        ref={ref}
      >
        {children}
      </button>
    </>
  )
}
