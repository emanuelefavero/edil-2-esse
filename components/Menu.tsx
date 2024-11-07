import { menuItems } from '@/data/menuItems'
import Link from 'next/link'

export default function Component() {
  // TODO Go to section when clicking on menu items

  return (
    <div className='hidden xs:flex gap-4 mr-1'>
      {menuItems.map((item) => (
        <Link
          href={`/#${item.id}`}
          key={item.id}
          className='px-2 rounded-sm text-stone-700 dark:text-white hover:text-yellow-600 dark:hover:text-yellow-500 outline-none focus:shadow-[0_0_0_1px] focus:shadow-stone-500/80 dark:focus:shadow-stone-500/80 select-none active:scale-95 transition-transform duration-200'
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}
