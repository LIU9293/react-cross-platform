import { ScrollView } from 'react-native'
import { LoginCard } from '@/containers/login-card'

export default function TabOneScreen() {
  return (
    <ScrollView className='p-2'>      
      <LoginCard /> 
    </ScrollView>
  )
}