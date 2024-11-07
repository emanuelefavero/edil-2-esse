import { contactItems } from '@/data/contactItems'

export default function Component() {
  return (
    <section
      id='contatti'
      className='bg-yellow-600 text-white border-t-[2.5px] border-yellow-700/60 dark:border-yellow-700/80 px-8 2xl:px-16 py-36 flex justify-center items-center font-semibold'
    >
      <div className='w-full max-w-screen-2xl flex flex-wrap items-center justify-between'>
        <div>
          <h2 className='text-3xl'>Edil 2 Esse</h2>

          <ul className='mt-8'>
            {contactItems.map((item) => (
              <li key={item.id} className='mb-4'>
                <span className='text-stone-100'>{item.label}:</span>
                <span className='ml-2 font-normal'>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
