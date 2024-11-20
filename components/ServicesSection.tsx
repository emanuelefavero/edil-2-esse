import { IServicesItem, servicesItems } from '@/data/servicesItems'

export default function Component() {
  return (
    <section
      id='servizi'
      className='flex w-full flex-col items-center justify-center px-8 py-40'
    >
      <ServicesTitle />
      <ServicesList />
    </section>
  )
}

// * Title
function ServicesTitle() {
  return (
    <div className='xl:scale-125'>
      <div className='flex items-center justify-center'>
        <div className='mr-3 hidden whitespace-nowrap font-semibold text-yellow-700 5xs:block dark:text-yellow-500'>
          Cosa offriamo
        </div>
        <div className='hidden h-0.5 w-full bg-yellow-700 3xs:block dark:bg-yellow-500'></div>
      </div>

      <h2 className='text-center text-sm font-bold uppercase leading-10 5xs:text-[2rem]'>
        I Nostri Servizi
      </h2>
    </div>
  )
}

// * List
function ServicesList() {
  return (
    <ul className='mt-28 flex w-full max-w-screen-xl flex-wrap items-stretch justify-center gap-8'>
      {servicesItems.map((item) => (
        <ServiceCard key={item.id} item={item} />
      ))}
    </ul>
  )
}

// * Card
function ServiceCard({ item }: { item: IServicesItem }) {
  return (
    <li className='flex w-fit max-w-[378px] flex-col items-center justify-center rounded-3xl border-2 border-yellow-700/35 bg-stone-50 shadow-[1px_1px_0px_0px] shadow-yellow-800/70 dark:border-yellow-600/35 dark:bg-[#151210] dark:shadow-[0.5px_0.5px_0px_0px] dark:shadow-yellow-600/70'>
      <div className='flex w-full items-center justify-center rounded-t-3xl border-b border-yellow-700/35 bg-amber-50 px-2 py-8 dark:border-yellow-600/35 dark:bg-yellow-950/10'>
        <item.icon className='w-20' />
      </div>
      <div className='min-h-[200px] rounded-b-3xl px-5 pb-6 pt-4'>
        <h3 className={`min-h-[40px] text-xl font-semibold`}>{item.title}</h3>
        <ul className='mt-4 flex w-full flex-col items-start gap-2 text-base'>
          {item.list.map((item, index) => (
            <li key={index} className='flex w-full items-start pl-3'>
              {/* Circle */}
              <span className='relative top-[8.4px] mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-yellow-600 dark:bg-yellow-600'></span>

              <span className='text-stone-600 dark:text-stone-400'>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}
