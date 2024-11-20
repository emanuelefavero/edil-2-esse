'use client'

import Button from '@/components/Button'
import { useRouter } from 'next/navigation'

export default function Component() {
  const router = useRouter()

  return (
    <Button
      className='5xs:text-md text-sm 3xs:text-lg'
      onClick={() => router.push('/#servizi')}
    >
      <span className='hidden 3xs:inline'>I NOSTRI</span> SERVIZI
    </Button>
  )
}
