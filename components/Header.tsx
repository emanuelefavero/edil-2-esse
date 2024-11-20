'use client'

import DropdownMenu from '@/components/DropdownMenu'
import Logo from '@/components/Logo'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import Menu from './Menu'

export default function Home() {
  const scrollDirection = useScrollDirection()

  return (
    <header
      className={`fixed z-[999] flex w-full items-center justify-center rounded-b-md border-b-[3px] border-yellow-500 bg-stone-100/90 px-2 py-2 shadow-[0_0_0_3px] shadow-amber-600/80 backdrop-blur-md transition-transform duration-200 dark:border-amber-500/80 dark:bg-[rgba(21,18,16,0.9)] dark:shadow-yellow-700/80 ${
        scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className='flex w-full max-w-screen-2xl items-center justify-between'>
        <Logo />
        <Menu />
        <DropdownMenu />
      </div>
    </header>
  )
}
