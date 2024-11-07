import { ReactNode } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

interface Props {
  children: ReactNode
  className?: string
}

export default function Component({ children, className }: Props) {
  return (
    <DropdownMenu.Item
      className={`relative flex select-none items-center rounded-[3px] text-base leading-none text-stone-700 dark:text-stone-200 font-medium outline-none data-[disabled]:pointer-events-none data-[disabled]:text-stone-400 dark:data-[disabled]:text-stone-500 data-[highlighted]:text-yellow-600 dark:data-[highlighted]:text-yellow-500 ${className}`}
    >
      {children}
    </DropdownMenu.Item>
  )
}
