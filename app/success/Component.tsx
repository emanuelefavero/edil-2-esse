'use client'

import Link from 'next/link'

export default function Component() {
  return (
    <section className='w-full h-[calc(100vh)] min-h-[667px] max-h-[900px] pt-16 pb-4 px-10 dark:bg-[#151210]/40 flex flex-col justify-center items-center gap-10'>
      <div className='text-center max-w-prose xl:scale-125 xl:mb-6'>
        <div className='mb-2 text-lg text-stone-700 dark:text-white'>
          EDIL 2 ESSE
        </div>
        <h1 className='text-stone-700 dark:text-white font-semibold text-lg 5xs:text-2xl 4xs:text-3xl 2xs:text-4xl 5xs:leading-[2.3rem] 4xs:leading-[3rem] 2xs:leading-[3.3rem] mb-4'>
          Grazie per averci contattato!
        </h1>
        <p className='font-[500] hidden 4xs:block text-md text-pretty text-stone-700 dark:text-white'>
          Ti risponderemo al più presto. Nel frattempo ti abbiamo inviato un
          email di conferma. A presto!
        </p>
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
