import DropdownMenu from '@/components/DropdownMenu'
import Logo from '@/components/Logo'

export default function Home() {
  return (
    <header className='fixed w-full flex justify-between items-center px-2 py-2 border-b border-stone-500/80 bg-stone-100/90 dark:bg-[rgba(21,18,16,0.9)] backdrop-blur-md'>
      <Logo />
      <DropdownMenu />
    </header>
  )
}
