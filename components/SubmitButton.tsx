'use client'

import { ReactNode, Ref } from 'react'
import { useFormStatus } from 'react-dom'
import clsx from 'clsx'
import Spinner from '@/components/icons/Spinner'

interface Props {
  children: ReactNode
  onClick?: () => void
  ariaLabel?: string
  className?: string
  ref?: Ref<HTMLButtonElement>
}

export default function Component({
  children,
  onClick,
  ariaLabel,
  className,
  ref,
}: Props) {
  const { pending } = useFormStatus()

  return (
    <button
      type='submit'
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={pending}
      className={clsx(
        'bg-yellow-700 border-[1px] border-amber-400 text-white shadow-[0.5px_0.5px_0.5px_0.8px] shadow-yellow-800/80 text-shadow-yellow font-[600] text-lg tracking-wide px-5 py-1.5 rounded-lg select-none outline-none focus:bg-yellow-600 hover:bg-yellow-600 duration-200 active:transform active:translate-y-0.5 active:scale-[0.99] active:shadow-none transition-all disabled:animate-pulse disabled:opacity-90',
        className
      )}
      ref={ref}
    >
      {pending ? <Spinner /> : children || ''}
    </button>
  )
}
