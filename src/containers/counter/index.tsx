import { useState } from 'react'
import { View } from '@/components/ui/view'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'

export function Counter () {
  const [count, setCount] = useState(0)
  return (
    <View className='flex flex-col items-center gap-4 p-8'>
      <Text className='text-2xl font-bold'>Cross platform UI test</Text>
      <Text className=''>Count: {count}</Text>
      <Button
        onClick={() => setCount(count + 1)}
        variant='outline'
      >
        Increment +
      </Button>
    </View>
  )
}