import { useState, useEffect } from 'react'
import { View } from '@/components/ui'
import { RoomCard } from "@/components/room-card"
import { TRoom, TRoomServer, transformType } from '@/types/room'
import { request } from '@/lib/request'
 
export function RoomList () {
  const [roomList, setRoomList] = useState<TRoom[]>([])

  useEffect(() => {
    getRoomList()
  }, [])

  async function getRoomList () {
    const response = await request({
      url: 'https://prod.mogroom.com/api/app/summary',
      method: 'GET',
      header: { appid: 'wx9949952662bbb0c4' }
    }) as { rooms: TRoomServer[] }
    
    setRoomList(response.rooms.map(transformType))
  }

  return (
    <View className='flex flex-col items-center gap-4 w-full box-border'>
      {roomList.map(room => {
        return (
          <RoomCard
            key={room.id}
            id={room.id}
            name={room.name}
            nameLocale={room.name}
            address={room.address}
            addressLocale={room.address}
            cover={room.cover}
            status={room.status}
            latitude={0}
            longitude={0}
            capacity={room.capacity}
            available={room.available}
          />
        )
      })}
    </View>
  )
}