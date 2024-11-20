'use client'

import Spinner from '@/components/icons/Spinner'
import clsx from 'clsx'
import { ReactNode, Ref } from 'react'
import { useFormStatus } from 'react-dom'

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
        'select-none rounded-lg border-[1px] border-amber-400 bg-yellow-700 px-5 py-1.5 text-lg font-[600] tracking-wide text-white shadow-[0.5px_0.5px_0.5px_0.8px] shadow-yellow-800/80 outline-none transition-all duration-200 text-shadow-yellow hover:bg-yellow-600 focus:bg-yellow-600 active:translate-y-0.5 active:scale-[0.99] active:transform active:shadow-none disabled:animate-pulse disabled:opacity-90',
        className,
      )}
      ref={ref}
    >
      {pending ? <Spinner /> : children || ''}
    </button>
  )
}
