import { View } from '@tarojs/components'
import { Homepage } from '@/containers/homepage'

export default function Index() {
  return (
    <View className='flex flex-col p-2 w-full box-border'>
      <Homepage />
    </View>
  )
}