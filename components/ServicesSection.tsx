import { servicesItems, IServicesItem } from '@/data/servicesItems'

export default function Component() {
  return (
    <section className='w-full flex items-center justify-center flex-col px-8 py-40'>
      <ServicesTitle />
      <ServicesList />
    </section>
  )
}

// * Title
function ServicesTitle() {
  return (
    <div className='xl:scale-125'>
      <div className='flex justify-center items-center'>
        <div className='hidden 5xs:block text-yellow-700 dark:text-yellow-500 font-semibold whitespace-nowrap mr-3'>
          Cosa offriamo
        </div>
        <div className='hidden 3xs:block bg-yellow-700 dark:bg-yellow-500 h-0.5 w-full'></div>
      </div>

      <h2 className='text-sm 5xs:text-[2rem] leading-10 font-bold uppercase text-center'>
        I Nostri Servizi
      </h2>
    </div>
  )
}

// * List
function ServicesList() {
  return (
    <ul className='w-full max-w-screen-xl flex flex-wrap justify-center items-center gap-8 mt-20'>
      {servicesItems.map((item) => (
        <ServiceCard key={item.id} item={item} />
      ))}
    </ul>
  )
}

// * Card
// TODO add shadow to card (e.g. shadow-[1px_1px_3px_1px] shadow-yellow-700/20)
function ServiceCard({ item }: { item: IServicesItem }) {
  return (
    <li className='w-fit flex flex-col items-center justify-center bg-stone-50 border-2 border-yellow-700/35 rounded-3xl'>
      <div className='bg-amber-50 border-b border-yellow-700/35 w-full flex justify-center items-center px-2 py-8 rounded-t-3xl'>
        <item.icon className='w-20' />
      </div>
      <div className='px-4 pt-4 pb-7'>
        <h3 className='text-xl font-semibold'>{item.title}</h3>
        <ul className='mt-4 text-base text-center'>
          {item.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </li>
  )
}
