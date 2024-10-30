import ZigZagBorder from '@/components/ZigZagBorder'
import { bannerItems } from '@/data/bannerItems'

export default function Component() {
  return (
    <>
      <ZigZagBorder />
      <section className='bg-yellow-600 text-white h-[130px] flex justify-center items-center gap-16 font-semibold'>
        {bannerItems.map((item) => (
          <div key={item.id} className='flex justify-center items-center gap-4'>
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
            <div className='text-sm max-w-20 text-shadow-yellow'>
              {item.label}
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
