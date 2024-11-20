'use client'

import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

export default function Component() {
  const pathname = usePathname()
  const router = useRouter()

  const handleClick = () => {
    if (pathname === '/') {
      window.scrollTo(0, 0)
      window.location.reload()
    } else {
      router.push('/')
    }
  }

  return (
    <>
      <button
        type='button'
        onClick={handleClick}
        className='w-[68px] select-none rounded-sm outline-none focus:shadow-[0_0_0_1px] focus:shadow-stone-500/80 dark:focus:shadow-stone-500/80'
        aria-label='Go to home'
      >
        <Image src='/logo.png' alt='Logo' width={250} height={145} priority />
      </button>
    </>
  )
}
