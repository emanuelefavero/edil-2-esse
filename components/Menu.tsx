import { menuItems } from '@/data/menuItems'
import Link from 'next/link'

export default function Component() {
  return (
    <div className='mr-1 hidden gap-3 xs:flex'>
      {menuItems.map((item) => (
        <Link
          href={`/#${item.id}`}
          key={item.id}
          className='select-none rounded-sm px-2 font-medium text-stone-700 outline-none transition-transform duration-200 hover:text-yellow-700 focus:text-yellow-600 active:scale-95 dark:text-white dark:hover:text-yellow-400 dark:focus:text-yellow-500'
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}
