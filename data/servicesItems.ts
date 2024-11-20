import BsBuildingsIcon from '@/components/icons/BsBuildingsIcon'
import BsDoorClosedIcon from '@/components/icons/BsDoorClosedIcon'
import BsThermometerSunIcon from '@/components/icons/BsThermometerSunIcon'
import GiBrickWallIcon from '@/components/icons/GiBrickWallIconIcon'
import GiDrillIcon from '@/components/icons/GiDrillIconIcon'
import MdOutlineElectricalServicesIcon from '@/components/icons/MdOutlineElectricalServicesIcon'
import { ReactNode } from 'react'

export interface IServicesItem {
  id: number
  title: string
  list: string[]
  icon: (props: { className: string }) => ReactNode
}

export const servicesItems = [
  {
    id: 1,
    title: 'Ristrutturazione Interni ed Esterni',
    list: [
      'Riparazioni murarie, intonaci e tinteggiature',
      'Ristrutturazione bagni, cucine, facciate e tetti',
    ],
    icon: GiDrillIcon,
  },
  {
    id: 2,
    title: 'Pavimentazioni e rivestimenti',
    list: [
      'Installazione di pavimenti in ceramica, parquet o pietra',
      'Rivestimenti per bagni, cucine, e altre aree della casa',
    ],
    icon: GiBrickWallIcon,
  },
  {
    id: 3,
    title: 'Manutenzione di edifici',
    list: [
      'Interventi di manutenzione (riparazioni di tetti, grondaie e serramenti).',
      'Realizzazione opere murarie interne ed esterne',
    ],
    icon: BsBuildingsIcon,
  },
  {
    id: 4,
    title: 'Isolamento termico e fotovoltaico',
    list: [
      'Applicazione di cappotti termici per il risparmio energetico',
      'Installazione di impianti fotovoltaici',
    ],
    icon: BsThermometerSunIcon,
  },
  {
    id: 5,
    title: 'Installazione di infissi e serramenti',
    list: [
      'Montaggio e sostituzione di finestre, porte e portoni',
      "Attenzione all'efficienza energetica",
    ],
    icon: BsDoorClosedIcon,
  },
  {
    id: 6,
    title: 'Impianti idraulici e elettrici',
    list: [
      'Interventi su impianti idrici ed elettrici',
      'Allacciamento di sanitari e lavori di ammodernamento',
    ],
    icon: MdOutlineElectricalServicesIcon,
  },
]
