import { Platform, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'



export default function ModalScreen() {
  return (
    <View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <Text>Modal</Text>
    </View>
  )
}