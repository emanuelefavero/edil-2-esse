export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='flex w-full flex-col items-center justify-center gap-2 bg-yellow-600 px-4 py-4 text-sm text-white xs:flex-row'>
      <p>&copy; {year} Edil 2 Esse</p>

      <span className='mx-1 hidden text-white xs:inline-block'>|</span>

      <a
        className='hidden text-center font-medium hover:underline 5xs:inline-block xs:text-left'
        href='https://emanuelefavero.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        Sito web realizzato da Emanuele Favero
      </a>
    </footer>
  )
}
