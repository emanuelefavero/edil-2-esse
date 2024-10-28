import DropdownMenu from '@/components/DropdownMenu'
import Logo from '@/components/Logo'

export default function Home() {
  return (
    <header className='w-full flex justify-between items-center px-2 py-2 border-b border-stone-500/80'>
      <Logo />
      <DropdownMenu />
    </header>
  )
}
