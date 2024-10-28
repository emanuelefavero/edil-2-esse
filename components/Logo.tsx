'use client'

import Image from 'next/image'

export default function Component() {
  return (
    <button
      type='button'
      onClick={() => {
        window.scrollTo(0, 0)
        window.location.reload()
      }}
      className='w-[68px] rounded-sm outline-none focus:shadow-[0_0_0_1px] focus:shadow-stone-500/80 dark:focus:shadow-stone-500/80 select-none'
      aria-label='Go to home'
    >
      <Image src='/logo.png' alt='Logo' width={250} height={145} priority />
    </button>
  )
}
