import { View } from '@/components/ui'
import { Profile } from '@/containers/profile'

export default function TabOneScreen() {
  return (
    <View className='flex flex-col items-center mt-12'>
      <Profile />
    </View>
  )
}