import { View, Text } from '@tarojs/components'
import { Profile } from '@/containers/profile'

export default function ProfilePage () {
  return (
    <View className='flex flex-col p-2 w-full box-border'>
      <Profile />
    </View>
  )
}