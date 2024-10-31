import { servicesItems, IServicesItem } from '@/data/servicesItems'

export default function Component() {
  return (
    <section className='w-full max-w-screen-2xl flex items-center justify-center flex-col px-8 py-20'>
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
    <ul className='w-full grid grid-cols-1 gap-8 mt-16 bg-red-500'>
      {servicesItems.map((item) => (
        <ServiceCard key={item.id} item={item} />
      ))}
    </ul>
  )
}

// * Card
function ServiceCard({ item }: { item: IServicesItem }) {
  return (
    <li className='flex flex-col items-center justify-center bg-red-500'>
      <div>
        <item.icon className='w-20' />
      </div>
      <h3 className='mt-4 text-lg font-semibold text-center'>{item.title}</h3>
      <ul className='mt-2 text-sm text-center'>
        {item.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </li>
  )
}
