export default function Component() {
  return (
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1445.8803722333867!2d10.335284!3d43.549029!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d5e9590478ed51%3A0x6b1a3d4dca66e6c6!2sVia%20Bengasi%2C%2097%2FB%2C%2057124%20Livorno%20LI!5e0!3m2!1sit!2sit!4v1731005160111!5m2!1sit!2sit'
      // width='400'
      // height='200'
      style={{ border: 0 }}
      allowFullScreen={true}
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
      className='rounded-md shadow-[0_0_0_3px] shadow-amber-600/80 dark:shadow-yellow-700/80 hidden md:block w-80'
    ></iframe>
  )
}
