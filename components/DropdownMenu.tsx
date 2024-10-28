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
          className='h-[40px] inline-flex items-center justify-center rounded-sm text-black dark:text-white outline-none focus:shadow-[0_0_0_1px] focus:shadow-stone-500/80 dark:focus:shadow-stone-500/80'
          aria-label='Open dropdown menu'
        >
          <Hamburger
            toggled={isOpen}
            rounded
            duration={0.3}
            color={
              isDarkMode
                ? isOpen
                  ? '#d97706'
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
          className='rounded-md bg-white dark:bg-stone-900 p-[5px] mr-2 shadow-sm shadow-stone-600/20 will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade border-[0.5px] border-stone-500/80'
          sideOffset={3}
        >
          {menuItems.map((item) => (
            <DropdownMenuItem key={item.id}>{item.label}</DropdownMenuItem>
          ))}

          <DropdownMenu.Arrow className='fill-stone-500/50' />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
