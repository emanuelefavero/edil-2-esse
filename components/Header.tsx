'use client'

import { useScrollDirection } from '@/hooks/useScrollDirection'
import DropdownMenu from '@/components/DropdownMenu'
import Logo from '@/components/Logo'

export default function Home() {
  const scrollDirection = useScrollDirection()

  return (
    <header
      className={`fixed w-full flex justify-center items-center px-2 py-2 border-b-[3px] border-yellow-500 dark:border-amber-500/80 rounded-b-md bg-stone-100/90 dark:bg-[rgba(21,18,16,0.9)] backdrop-blur-md shadow-[0_0_0_3px] shadow-amber-600/80 dark:shadow-yellow-700/80 transition-transform duration-200 ${
        scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className='max-w-screen-2xl w-full flex justify-between items-center'>
        <Logo />
        <DropdownMenu />
      </div>
    </header>
  )
}
