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
      <h1 className='mb-4 text-lg font-semibold text-stone-700 5xs:text-2xl 5xs:leading-[2.3rem] 4xs:text-3xl 4xs:leading-[3rem] 2xs:text-4xl 2xs:leading-[3.3rem] dark:text-white'>
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
      <p className='text-md hidden text-pretty font-[500] text-stone-700 4xs:block dark:text-white'>
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
