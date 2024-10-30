import ZigZagBorder from '@/components/ZigZagBorder'
import { bannerItems } from '@/data/bannerItems'

export default function Component() {
  return (
    <>
      <ZigZagBorder />
      <section className='bg-yellow-600 text-white min-h-[130px] px-8 2xl:px-16 py-8 flex justify-center items-center font-semibold'>
        <ul className='w-full max-w-screen-2xl flex items-center justify-center'>
          {bannerItems.map((item) => (
            <li
              key={item.id}
              className={` 
              ${item.id > 1 && 'ml-16 lg:ml-16'}
              ${item.id === 4 ? 'hidden lg:flex' : 'flex'}
              ${item.id === 3 ? 'hidden md:flex' : 'flex'}
              ${item.id === 2 ? 'hidden sm:flex' : 'flex'} 
              justify-center items-center`}
            >
              <div className='text-5xl font-bold text-shadow-yellow'>
                {item.value}
                <span
                  className={`relative -top-2 ml-0.5 ${
                    item.symbol === '%' ? 'text-2xl' : 'text-4xl'
                  }`}
                >
                  {item.symbol}
                </span>
              </div>
              <div className='text-sm text-shadow-yellow ml-4'>
                {item.label}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
