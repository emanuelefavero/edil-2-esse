import Link from 'next/link'
import { Suspense } from 'react'
import Component from './Component'

export default function Page() {
  return <SuccessSection />
}

function SuccessSection() {
  return (
    <section className='flex h-[calc(100vh-52px)] min-h-[667px] w-full flex-col items-center justify-center gap-10 px-10 pb-4 pt-16 dark:bg-[#151210]/40'>
      <div className='max-w-prose text-center xl:mb-6 xl:scale-125'>
        <Suspense fallback={<div>Caricamento...</div>}>
          <Component />
        </Suspense>
      </div>
      <Link
        href='/'
        className='text-xl font-semibold text-yellow-600 hover:underline dark:text-yellow-500'
      >
        {'←'} Torna alla home
      </Link>
    </section>
  )
}
