import DropdownMenu from '@/components/DropdownMenu'

export default function Home() {
  return (
    <>
      <header className='w-full flex justify-between items-center px-2 py-2'>
        <div>Logo</div>
        <DropdownMenu />
      </header>
      <h1>EDIL 2 ESSE</h1>
    </>
  )
}
