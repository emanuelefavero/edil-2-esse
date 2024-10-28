import DropdownMenu from '@/components/DropdownMenu'
import Logo from '@/components/Logo'

export default function Home() {
  return (
    <header className='fixed w-full flex justify-between items-center px-2 py-2 border-b-4 border-amber-600/80 dark:border-amber-500/80 rounded-b-md bg-stone-100/90 dark:bg-[rgba(21,18,16,0.9)] backdrop-blur-md'>
      <Logo />
      <DropdownMenu />
    </header>
  )
}
