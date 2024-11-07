'use client'

import { useRouter } from 'next/navigation'
import Button from '@/components/Button'

export default function Component() {
  const router = useRouter()

  return (
    <Button
      className='text-sm 5xs:text-md 3xs:text-lg'
      onClick={() => router.push('/#servizi')}
    >
      <span className='hidden 3xs:inline'>I NOSTRI</span> SERVIZI
    </Button>
  )
}
