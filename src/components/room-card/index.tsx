import { Text, Image, View } from '@/components/ui'
import { BusyIndicator } from '@/components/busy-indicator'
import { distance } from '@/lib/utils'
import { TRoom } from '@/types/room'

export function RoomCard (props: Omit<TRoom, 'images' | 'isTemporaryClosed'> & {
  onClick?: () => void
}) {
  return (
    <View className={'w-full max-w-[400px] bg-white rounded-lg overflow-hidden flex flex-row gap-2 ' + (props.isActive ? '' : 'opacity-40')} onClick={props.onClick}>
      <Image
        className="w-[140px] h-[100px] object-cover rounded-lg overflow-hidden"
        height={100}
        width={140}
        mode='aspectFill'
        src={props.cover}
      />
      <View className='p-2 flex flex-col flex-1'>
        <View className='flex flex-row justify-between items-center w-full'>
          <Text className='font-bold text-md'>{props.nameLocale}</Text>
          <Text className='text-gray-500'>1.1公里</Text>
        </View>
        <View className='flex flex-row items-center'>
          <Text className='text-gray-500 text-sm'>{props.addressLocale}</Text>
        </View>
        <View className='flex flex-row items-center mt-2'>
          <BusyIndicator fill={3} lessIsGreen />
        </View>
      </View>
    </View>
  )
}