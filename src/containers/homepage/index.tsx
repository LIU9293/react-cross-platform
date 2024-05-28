import { View, Text, Image, Button } from '@/components/ui'
import { route } from '@/components/router'

export function Homepage () {
  const toProfilePage = () => {
    route({
      action: 'push',
      pageKey: 'profile',
    })
  }

  return (
    <View className='flex flex-col items-center gap-8 w-full box-border'>
      <View className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <View className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <View className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="absolute inset-0 h-full w-full object-cover"
              width={350}
              height={200}
            />
          </View>
          <View className="lg:py-24 py-2">
            <Text className="text-2xl font-bold">React corss platform</Text>
            <Text className="mt-8 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
              eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
              quidem quam repellat.
            </Text>
            <Button onClick={toProfilePage} className='mt-8'>
              Push route
            </Button>
          </View>
        </View>
      </View>
    </View>
  )
}

