import { Text, View } from 'react-native'
import { TestCard } from '@/components/test-card'

export default function TabOneScreen() {
  return (
    <View className='text-center p-4'>
      <Text className='font-bold text-lg'>Tab2</Text>
      <TestCard />
    </View>
  )
}