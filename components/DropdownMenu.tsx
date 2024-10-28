'use client'

import { useState } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Hamburger from 'hamburger-react'
import { useDarkMode } from '@/hooks/useDarkMode'
import { menuItems } from '@/data/menuItems'
import DropdownMenuItem from '@/components/DropdownMenuItem'

export default function DropdownMenuDemo() {
  const [isOpen, setIsOpen] = useState(false)
  const isDarkMode = useDarkMode()

  return (
    <DropdownMenu.Root onOpenChange={(open) => setIsOpen(open)}>
      <DropdownMenu.Trigger asChild>
        <button
          className='h-[40px] inline-flex items-center justify-center text-stone-700 dark:text-stone-200 rounded-sm outline-none focus:shadow-[0_0_0_1px] focus:shadow-stone-500/80 dark:focus:shadow-stone-500/80 select-none'
          aria-label='Open dropdown menu'
        >
          <Hamburger
            toggled={isOpen}
            rounded
            duration={0.3}
            color={
              isDarkMode
                ? isOpen
                  ? '#f59e0b'
                  : '#e7e5e4'
                : isOpen
                ? '#d97706'
                : '#44403c'
            }
          />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className='rounded-md bg-stone-100/90 dark:bg-[rgba(21,18,16,0.9)] backdrop-blur-md p-[5px] mr-2 shadow-sm shadow-stone-600/20 will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade border-[0.5px] border-stone-500/80'
          sideOffset={0}
        >
          {menuItems.map((item) => (
            <DropdownMenuItem key={item.id}>{item.label}</DropdownMenuItem>
          ))}

          <DropdownMenu.Arrow className='fill-stone-600/80 dark:fill-stone-600/80' />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
