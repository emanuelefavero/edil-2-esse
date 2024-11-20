'use client'

import DropdownMenuItem from '@/components/DropdownMenuItem'
import { menuItems } from '@/data/menuItems'
import { useDarkMode } from '@/hooks/useDarkMode'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Hamburger from 'hamburger-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Component() {
  const [isOpen, setIsOpen] = useState(false)
  const isDarkMode = useDarkMode()

  return (
    <DropdownMenu.Root
      onOpenChange={(open) => setIsOpen(open)}
      open={isOpen}
      modal={false}
    >
      <DropdownMenu.Trigger asChild>
        <button
          className='inline-flex h-[40px] select-none items-center justify-center rounded-sm text-stone-700 outline-none focus:shadow-[0_0_0_1px] focus:shadow-stone-500/80 xs:hidden dark:text-stone-200 dark:focus:shadow-stone-500/80'
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
          className='z-[999] mr-2 rounded-md border-[0.5px] border-stone-500/80 bg-stone-100/90 p-[5px] shadow-sm shadow-stone-600/20 backdrop-blur-md will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade dark:bg-[rgba(21,18,16,0.9)]'
          sideOffset={0}
        >
          {menuItems.map((item) => (
            <DropdownMenuItem key={item.id}>
              <Link
                href={`/#${item.id}`}
                className='w-full px-2 py-3 font-medium transition-transform duration-200 hover:text-yellow-700 active:scale-95 dark:hover:text-yellow-400'
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </DropdownMenuItem>
          ))}

          <DropdownMenu.Arrow className='fill-stone-600/80 dark:fill-stone-600/80' />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
