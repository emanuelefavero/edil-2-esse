import { ReactNode } from 'react'
import GiDrillIcon from '@/components/icons/GiDrillIcon'
import GiBrickWallIcon from '@/components/icons/GiBrickWallIcon'
import BsBuildingsIcon from '@/components/icons/BsBuildingsIcon'

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
    title: 'Ristrutturazione Interni ed Esterni',
    list: [
      'Riparazioni murarie, intonaci e tinteggiature',
      'Ristrutturazione bagni, cucine, facciate e tetti',
    ],
    icon: GiBrickWallIcon,
  },
  {
    id: 3,
    title: 'Ristrutturazione Interni ed Esterni',
    list: [
      'Riparazioni murarie, intonaci e tinteggiature',
      'Ristrutturazione bagni, cucine, facciate e tetti',
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
    icon: GiDrillIcon,
  },
  {
    id: 5,
    title: 'Ristrutturazione Interni ed Esterni',
    list: [
      'Riparazioni murarie, intonaci e tinteggiature',
      'Ristrutturazione bagni, cucine, facciate e tetti',
    ],
    icon: GiDrillIcon,
  },
  {
    id: 6,
    title: 'Ristrutturazione Interni ed Esterni',
    list: [
      'Riparazioni murarie, intonaci e tinteggiature',
      'Ristrutturazione bagni, cucine, facciate e tetti',
    ],
    icon: GiDrillIcon,
  },
]
