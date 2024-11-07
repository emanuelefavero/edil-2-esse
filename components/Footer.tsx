export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='w-full bg-yellow-600 text-white py-4 px-4 flex justify-center items-center gap-2 text-sm'>
      <p>&copy; {year} Edil 2 Esse</p>

      <span className='hidden 5xs:inline-block text-white mx-1'>|</span>

      <a
        className='hidden 5xs:inline-block font-medium hover:underline'
        href='https://emanuelefavero.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        Sito web realizzato da Emanuele Favero
      </a>
    </footer>
  )
}
