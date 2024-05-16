import { View, Text } from '@/components/ui'
import { RoomCard } from "@/components/room-card"
import { useRoomList } from '@/store/room-list'
 
export function RoomList () {
  const { data: roomList, loading } = useRoomList()
  
  return (
    <View className='flex flex-col items-center gap-4 w-full box-border'>
      {loading && <Text className='dark:text-white'>Loading...</Text>}
      {roomList && roomList.map(room => {
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