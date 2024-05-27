import { View, Image } from '@/components/ui'
import WelcomeImage from '@/assets/images/welcome.svg'

export function Welcome() {
  return (
    <View className="flex flex-col w-full mt-4">
      <Image src={WelcomeImage} className="w-[132px] h-[40px]" width={132} height={20} />
    </View>
  )
}
