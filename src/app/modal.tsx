import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { AuthContainer } from '@/containers/auth-container'

export default function ModalScreen() {
  return (
    <View>
      <StatusBar />
      <AuthContainer />
    </View>
  )
}