import { ScrollView } from 'react-native'
import { Counter } from '@/containers/counter'
import { LoginCard } from '@/containers/login-card'

export default function TabOneScreen() {
  return (
    <ScrollView className='p-2'>
      <Counter />
      <LoginCard /> 
    </ScrollView>
  )
}