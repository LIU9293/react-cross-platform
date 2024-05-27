import { View } from '@/components/ui'
import { Welcome } from './welcome'
import { QuickActions } from './quick-actions-1'
import { RoomList } from './room-list'

export function Homepage () {
  return (
    <View className='flex flex-col items-center gap-8 w-full box-border'>
      <Welcome />
      <QuickActions />
      <RoomList />
    </View>
  )
}