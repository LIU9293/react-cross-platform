import { ScrollView } from 'react-native'
import { Homepage } from "@/containers/homepage"

export default function TabOneScreen() {
  return (
    <ScrollView className='p-2 bg-white'>      
      <Homepage /> 
    </ScrollView>
  )
}