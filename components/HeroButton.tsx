import Link from 'next/link'

export default function Component() {
  return (
    <Link
      href={`/#servizi`}
      className='5xs:text-md relative select-none rounded-lg border-[1px] border-amber-400 bg-yellow-700 px-5 py-1.5 text-sm font-[600] tracking-wide text-white shadow-[0.5px_0.5px_0.5px_0.8px] shadow-yellow-800/80 outline-none transition-all duration-200 text-shadow-yellow hover:bg-yellow-600 focus:bg-yellow-600 active:translate-y-0.5 active:scale-[0.99] active:transform active:shadow-none disabled:cursor-not-allowed disabled:opacity-50 3xs:text-lg'
    >
      <span className='hidden 3xs:inline'>I NOSTRI</span> SERVIZI
    </Link>
  )
}
