import { ScrollView } from 'react-native'
import { RoomList } from '@/containers/room-list'

export default function TabOneScreen() {
  return (
    <ScrollView className='p-2 dark:bg-gray-950'>      
      <RoomList /> 
    </ScrollView>
  )
}