'use client'

import { useSearchParams } from 'next/navigation'

export default function Component() {
  const searchParams = useSearchParams()
  const name = searchParams.get('name')
  const email = searchParams.get('email')

  return (
    <>
      <div className='mb-2 text-lg text-stone-700 dark:text-white'>
        EDIL 2 ESSE
      </div>
      <h1 className='text-stone-700 dark:text-white font-semibold text-lg 5xs:text-2xl 4xs:text-3xl 2xs:text-4xl 5xs:leading-[2.3rem] 4xs:leading-[3rem] 2xs:leading-[3.3rem] mb-4'>
        Grazie per averci contattato
        {name ? (
          <>
            ,{' '}
            <span className='text-yellow-600 dark:text-yellow-500'>{name}</span>
          </>
        ) : (
          ''
        )}
        !
      </h1>
      <p className='font-[500] hidden 4xs:block text-md text-pretty text-stone-700 dark:text-white'>
        Ti risponderemo al più presto. Nel frattempo ti abbiamo inviato un email
        di conferma{' '}
        {email ? (
          <>
            all{"'"}indirizzo{' '}
            <span className='text-yellow-600 dark:text-yellow-500'>
              {email}
            </span>
          </>
        ) : (
          ''
        )}
        . A presto!
      </p>
    </>
  )
}
