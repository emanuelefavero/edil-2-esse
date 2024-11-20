import ZigZagBorder from '@/components/ZigZagBorder'
import { bannerItems, IBannerItem } from '@/data/bannerItems'

interface Props {
  item: IBannerItem
}

function BannerItem({ item }: Props) {
  const responsiveHide = (id: number) =>
    id === 4
      ? 'hidden lg:flex'
      : id === 3
        ? 'hidden md:flex'
        : id === 2
          ? 'hidden sm:flex'
          : 'flex'

  const sizeBasedOnSymbol = item.symbol === '%' ? 'text-2xl' : 'text-4xl'

  return (
    <li
      key={item.id}
      className={`flex items-center justify-center ${responsiveHide(item.id)} ${
        item.id > 1 && 'ml-16 lg:ml-16'
      }`}
    >
      <div className='hidden select-none text-5xl font-bold text-shadow-yellow 5xs:block'>
        {item.value}
        <span className={`relative -top-2 ml-0.5 ${sizeBasedOnSymbol}`}>
          {item.symbol}
        </span>
      </div>
      <div className='ml-4 select-none text-sm text-shadow-yellow'>
        <span className={`${item.id === 1 ? 'inline 5xs:hidden' : 'hidden'}`}>
          35+{' '}
        </span>
        {item.label}
      </div>
    </li>
  )
}

export default function Banner() {
  return (
    <>
      <ZigZagBorder />

      <section className='flex min-h-[130px] items-center justify-center border-b-[2.5px] border-yellow-700/60 bg-yellow-600 px-8 py-8 font-semibold text-white 2xl:px-16 dark:border-yellow-700/80'>
        <ul className='flex w-full max-w-screen-2xl items-center justify-center'>
          {bannerItems.map((item) => (
            <BannerItem key={item.id} item={item} />
          ))}
        </ul>
      </section>
    </>
  )
}
