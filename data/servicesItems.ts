import { ReactNode } from 'react'
import GiDrillIcon from '@/components/icons/GiDrillIconIcon'
import GiBrickWallIcon from '@/components/icons/GiBrickWallIconIcon'
import BsBuildingsIcon from '@/components/icons/BsBuildingsIcon'
import BsThermometerSunIcon from '@/components/icons/BsThermometerSunIcon'
import BsDoorClosedIcon from '@/components/icons/BsDoorClosedIcon'
import MdOutlineElectricalServicesIcon from '@/components/icons/MdOutlineElectricalServicesIcon'

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
    title: 'Costruzione e manutenzione di edifici',
    list: [
      'Interventi di manutenzione (riparazioni di tetti, grondaie e serramenti).',
      'Realizzazione opere murarie',
    ],
    icon: BsBuildingsIcon,
  },
  {
    id: 4,
    title: 'Ristrutturazione Interni ed Esterni',
    list: [
      'Riparazioni murarie, intonaci e tinteggiature',
      'Ristrutturazione bagni, cucine, facciate e tetti',
    ],
    icon: BsThermometerSunIcon,
  },
  {
    id: 5,
    title: 'Ristrutturazione Interni ed Esterni',
    list: [
      'Riparazioni murarie, intonaci e tinteggiature',
      'Ristrutturazione bagni, cucine, facciate e tetti',
    ],
    icon: BsDoorClosedIcon,
  },
  {
    id: 6,
    title: 'Ristrutturazione Interni ed Esterni',
    list: [
      'Riparazioni murarie, intonaci e tinteggiature',
      'Ristrutturazione bagni, cucine, facciate e tetti',
    ],
    icon: MdOutlineElectricalServicesIcon,
  },
]
