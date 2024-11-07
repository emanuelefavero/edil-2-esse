export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='w-full bg-yellow-600 text-white py-4 px-4 flex flex-col xs:flex-row justify-center items-center gap-2 text-sm'>
      <p>&copy; {year} Edil 2 Esse</p>

      <span className='hidden xs:inline-block text-white mx-1'>|</span>

      <a
        className='hidden 5xs:inline-block font-medium hover:underline text-center xs:text-left'
        href='https://emanuelefavero.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        Sito web realizzato da Emanuele Favero
      </a>
    </footer>
  )
}
