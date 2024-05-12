
export type TRoomServer = {
  id: number
  name: string
  address: string
  cover: string
  images: string[]
  isActive: boolean
}

export type TRoom = {
  id: number
  name: string
  nameLocale: string
  address: string
  addressLocale: string
  cover: string
  images: string[]

  status: 'active' | 'open-soon' | 'paused' | 'closed'
  latitude: number
  longitude: number

  capacity: number
  available: number
  promitionTag?: string
}

export function transformType (data: TRoomServer): TRoom {
  return {
    id: data.id,
    name: data.name,
    nameLocale: data.name,
    address: data.address,
    addressLocale: data.address,
    cover: data.cover,
    images: data.images,
    status: data.isActive ? 'active' : 'open-soon',
    latitude: 0,
    longitude: 0,
    capacity: 0,
    available: 0
  }
}