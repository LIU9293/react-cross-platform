import { View } from '@tarojs/components'
import { RoomList } from '@/containers/room-list'

export default function Index() {
  return (
    <View className='flex flex-col p-2 w-full box-border'>
      <RoomList />
    </View>
  )
}
