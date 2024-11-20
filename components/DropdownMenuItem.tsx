import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export default function Component({ children, className }: Props) {
  return (
    <DropdownMenu.Item
      className={`relative flex select-none items-center rounded-[3px] text-base font-medium leading-none text-stone-700 outline-none data-[disabled]:pointer-events-none data-[disabled]:text-stone-400 data-[highlighted]:text-yellow-600 dark:text-stone-200 dark:data-[disabled]:text-stone-500 dark:data-[highlighted]:text-yellow-500 ${className}`}
    >
      {children}
    </DropdownMenu.Item>
  )
}
