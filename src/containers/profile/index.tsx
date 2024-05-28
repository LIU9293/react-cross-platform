import { View, Text, Button } from '@/components/ui'
import { route } from '@/components/router'

export function Profile () {
  const goBack = () => {
    route({ action: 'pull' })
  }

  return (
    <View className='flex flex-col items-center gap-8 w-full box-border'>
      <Text className='text-2xl'>Profile page</Text>
      <Button onClick={goBack}>Go back</Button>
    </View>
  )
}