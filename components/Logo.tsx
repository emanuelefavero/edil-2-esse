'use client'

import Image from 'next/image'

export default function Component() {
  return (
    <>
      <button
        type='button'
        onClick={() => {
          window.scrollTo(0, 0)
          window.location.reload()
        }}
      >
        <Image src='/logo.png' alt='Logo' width={68} height={68} />
      </button>
    </>
  )
}
