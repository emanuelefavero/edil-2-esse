import Component from './Component'
import { Suspense } from 'react'
import Link from 'next/link'

export default function Page() {
  return <SuccessSection />
}

function SuccessSection() {
  return (
    <section className='w-full h-[calc(100vh)] min-h-[667px] max-h-[900px] pt-16 pb-4 px-10 dark:bg-[#151210]/40 flex flex-col justify-center items-center gap-10'>
      <div className='text-center max-w-prose xl:scale-125 xl:mb-6'>
        <Suspense fallback={<div>Caricamento...</div>}>
          <Component />
        </Suspense>
      </div>
      <Link
        href='/'
        className='text-yellow-600 dark:text-yellow-500 text-xl font-semibold hover:underline'
      >
        {'←'} Torna alla home
      </Link>
    </section>
  )
}
