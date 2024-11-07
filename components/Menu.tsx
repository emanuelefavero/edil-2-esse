import { menuItems } from '@/data/menuItems'
import Link from 'next/link'

export default function Component() {
  // TODO Go to section when clicking on menu items

  return (
    <div className='hidden xs:flex gap-3 mr-1'>
      {menuItems.map((item) => (
        <Link
          href={`/#${item.id}`}
          key={item.id}
          className='px-2 font-medium rounded-sm text-stone-700 dark:text-white hover:text-yellow-700 dark:hover:text-yellow-400 outline-none focus:text-yellow-600 dark:focus:text-yellow-500 select-none active:scale-95 transition-transform duration-200'
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}
