export interface IBannerItem {
  id: number
  value: string
  symbol: string
  label: string
}

export const bannerItems: IBannerItem[] = [
  { id: 1, value: '35', symbol: '+', label: 'Anni di esperienza' },
  { id: 2, value: '300', symbol: '+', label: 'Clienti soddisfatti' },
  { id: 3, value: '1000', symbol: '+', label: 'Progetti completati' },
  { id: 4, value: '100', symbol: '%', label: 'Soddisfazione garantita' },
]
