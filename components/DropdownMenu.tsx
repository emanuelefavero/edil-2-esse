'use client'

import { useState } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Hamburger from 'hamburger-react'
// import { HamburgerMenuIcon } from '@radix-ui/react-icons'

export default function DropdownMenuDemo() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownMenu.Root onOpenChange={(open) => setIsOpen(open)}>
      <DropdownMenu.Trigger asChild>
        <button
          className='inline-flex items-center justify-center px-[3.5px] rounded-sm text-black dark:text-white outline-none focus:shadow-[0_0_0_1px] focus:shadow-stone-500/80 dark:focus:shadow-stone-500/80 active:scale-95'
          aria-label='Open dropdown menu'
        >
          {/* <HamburgerMenuIcon className='size-[40px] text-stone-700 dark:text-stone-200' /> */}
          <Hamburger toggled={isOpen} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className='rounded-md bg-white dark:bg-stone-900 p-[5px] mr-2 shadow-sm shadow-stone-600/20 will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade border-[0.5px] border-stone-500/80'
          sideOffset={3}
        >
          <DropdownMenu.Item className='group relative flex select-none items-center rounded-[3px] px-2 py-2 text-base leading-none text-stone-700 dark:text-stone-200 font-medium outline-none data-[disabled]:pointer-events-none data-[disabled]:text-stone-400 dark:data-[disabled]:text-stone-500 data-[highlighted]:text-amber-600'>
            Home
          </DropdownMenu.Item>

          <DropdownMenu.Item className='group relative flex select-none items-center rounded-[3px] px-2 py-2 text-base leading-none text-stone-700 dark:text-stone-200 font-medium outline-none data-[disabled]:pointer-events-none data-[disabled]:text-stone-400 dark:data-[disabled]:text-stone-500 data-[highlighted]:text-amber-600'>
            Servizi
          </DropdownMenu.Item>

          <DropdownMenu.Item className='group relative flex select-none items-center rounded-[3px] px-2 py-2 text-base leading-none text-stone-700 dark:text-stone-200 font-medium outline-none data-[disabled]:pointer-events-none data-[disabled]:text-stone-400 dark:data-[disabled]:text-stone-500 data-[highlighted]:text-amber-600'>
            Chi Siamo
          </DropdownMenu.Item>

          <DropdownMenu.Item className='group relative flex select-none items-center rounded-[3px] px-2 py-2 text-base leading-none text-stone-700 dark:text-stone-200 font-medium outline-none data-[disabled]:pointer-events-none data-[disabled]:text-stone-400 dark:data-[disabled]:text-stone-500 data-[highlighted]:text-amber-600'>
            Contatti
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className='fill-stone-500/50' />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
