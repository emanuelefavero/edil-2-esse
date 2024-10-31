import { ReactNode } from 'react'
import GiDrillIcon from '@/components/icons/GiDrillIcon'

export interface IServicesItem {
  id: number
  title: string
  list: string[]
  // icon: string
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
    // icon: 'drill',
    icon: GiDrillIcon,
  },
]
