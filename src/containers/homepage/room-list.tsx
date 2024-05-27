import { useEffect } from 'react'
import { View, Text } from '@/components/ui'
import { RoomCard } from "@/components/room-card"
import { useRoomList } from '@/store/room-list'
import { route } from '@/components/router'

export function RoomList () {
  const { data: roomList, fetch: fetchRoomList } = useRoomList()

  useEffect(() => {
    fetchRoomList()
  }, [])

  const activeRooms = roomList ? roomList.filter(item => item.isActive && !item.isTemporaryClosed) : []
  const openSoonRooms = roomList ? roomList.filter(item => !item.isActive) : []

  const toRoomDetailPage = (roomId: number) => {
    route({
      pageKey: 'RoomDetail',
      params: {
        id: roomId
      }
    })
  }

  return (
    <View className='flex flex-col gap-4 w-full box-border'>
      <Text className=''>附近的店铺</Text>
      {activeRooms && activeRooms.map(room => {
        return (
          <RoomCard
            onClick={() => { toRoomDetailPage(room.id) }}
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
            isActive
          />
        )
      })}
      {openSoonRooms && openSoonRooms.length > 0 && (
        <>
          <Text>即将开放</Text>
          {openSoonRooms.map(room => {
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
                isActive={false}
              />
            )
          })}
        </>
      )}
    </View>
  )
}