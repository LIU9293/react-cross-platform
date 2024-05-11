import { View, Text, Image } from '@/components/ui'
import TestSVG from '@/assets/svg/test.svg'

export function TestCard () {
  return (
    <View className="w-full max-w-[400px] bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-lg">
      <Image src={TestSVG} className='w-[20px] h-[20px]' width={'20'} height={'20'} />
      <Image
        className="w-full h-[200px] object-cover"
        height="200"
        src="https://plus.unsplash.com/premium_photo-1714757483939-810e8af6eeab?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        style={{
          aspectRatio: "400/200",
          objectFit: "cover",
        }}
        width="400"
      />
      <View className="p-6 space-y-4">
        <View className="space-y-2">
          <Text className="text-2xl font-bold dark:text-white">Mastering the Art of Minimalist Design</Text>
          <Text className="text-gray-500 dark:text-gray-400 line-clamp-2">
            Discover the power of simplicity and how to create stunning designs that captivate your audience. In this
            blog post, we'll explore the principles of minimalist design and provide practical tips to elevate your
            creative projects.
          </Text>
        </View>
        <View className="flex flex-row items-center">
          <View className='flex flex-col'>
            <Text className="font-medium dark:text-white">John Doe</Text>
            <Text className="text-sm text-gray-500 dark:text-gray-400">Design Enthusiast</Text>
          </View>
        </View>
      </View>
    </View>
  )
}