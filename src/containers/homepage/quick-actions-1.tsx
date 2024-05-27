import { View, Image, Text } from '@/components/ui'
import IconPackage from '@/assets/icon_package.svg'
import IconPhone from '@/assets/icon_phone.svg'
import IconCard from '@/assets/icon_card.svg'
import { ThemedIconCircle } from '@/components/themed-icon-circle'

export function QuickActions ({ primaryColor = '#2948FF' }) {
  const vouchers = []
  const subtitle = vouchers.length === 0 ? '优惠套餐' : `${vouchers.length}张优惠券`

  return (
    <View className='rounded-lg flex flex-row items-center w-full py-4'>
      <View className='flex-1 flex flex-col items-center'>
        <View className='relative'>
          <View>
            <Image src={IconPackage} height={30} width={34} />
          </View>
          <ThemedIconCircle left={-12} top={-5} color={primaryColor} />
        </View>
        <Text className='pt-2 text-sm'>我的卡券</Text>
      </View>

      <View className='flex-1 flex flex-col items-center'>
        <View className='relative'>
          <View className='top-[5px]'>
            <Image src={IconPhone} width={36} height={42} />
          </View>
          <ThemedIconCircle left={-9} top={-8} color={primaryColor} />
        </View>
        <Text className='pt-2 text-sm'>自助验券</Text>
      </View>

      <View className='flex-1 flex flex-col items-center'>
        <View className='relative'>
          <View className='top-[2px]'>
            <Image src={IconCard} width={39} height={27} />
          </View>
          <ThemedIconCircle left={-12} top={-10} color={primaryColor} />
        </View>
        <Text className='pt-2 text-sm'>{subtitle}</Text>
      </View>
    </View>
  )
}