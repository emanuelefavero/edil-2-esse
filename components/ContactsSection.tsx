import Map from '@/components/Map'
import { contactItems } from '@/data/contactItems'

export default function Component() {
  return (
    <section
      id='contatti'
      className='flex items-center justify-center border-t-[2.5px] border-yellow-700/60 bg-yellow-600 px-8 py-36 font-semibold text-white md:px-16 dark:border-yellow-700/80'
    >
      <div className='flex w-full max-w-screen-2xl flex-wrap items-center justify-center'>
        <div className='flex'>
          <div className='pr-10'>
            <h2 className='text-3xl'>Edil 2 Esse</h2>
            <ul className='mt-8 flex max-w-[788px] flex-wrap items-start gap-4'>
              {contactItems.map((item) => (
                <li key={item.id}>
                  <span className='text-sm font-semibold 5xs:text-lg xs:text-xl'>
                    {item.label}:
                  </span>
                  <span className='ml-2 text-sm font-normal 5xs:text-base xs:text-lg'>
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <Map />
        </div>
      </div>
    </section>
  )
}
