export default function Component() {
  return (
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1612.8224860312173!2d10.334680526226451!3d43.54935058817961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDPCsDMyJzU2LjIiTiAxMMKwMjAnMDUuNyJF!5e0!3m2!1sen!2sit!4v1731007391518!5m2!1sen!2sit'
      // width='400'
      // height='200'
      style={{ border: 0 }}
      allowFullScreen={true}
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
      className='rounded-md shadow-[0_0_0_2.5px] shadow-yellow-700/80 hidden md:block w-80'
    ></iframe>
  )
}
