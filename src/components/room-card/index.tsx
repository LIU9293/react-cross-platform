import { Text, Image, View } from '@/components/ui'
import { BusyIndicator } from '@/components/busy-indicator'
import { distance } from '@/lib/utils'
import { TRoom } from '@/types/room'

export function RoomCard (props: Omit<TRoom, 'images'>) {
  return (
    <View className='w-full max-w-[400px] bg-white dark:bg-gray-950 rounded-lg overflow-hidden flex flex-row gap-2'>
      <Image
        className="w-[140px] h-[100px] object-cover rounded-lg overflow-hidden"
        height="100"
        width="140"
        mode='aspectFill'
        src={props.cover}
      />
      <View className='p-2 flex flex-col flex-1'>
        <View className='flex flex-row justify-between items-center w-full'>
          <Text className='font-bold text-md dark:text-white'>{props.nameLocale}</Text>
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

  // const fill = getFillByMinMax(allSeats - availableSeats, allSeats)
  // let range = ''
  // if (longitude && latitude && location && location.indexOf(',') > 0) {
  //   // have user location
  //   const [a, b] = location.split(',')
  //   const meter = distance(latitude, longitude, parseFloat(a), parseFloat(b))
  //   if (meter > 1000) {
  //     range = (meter / 1000).toFixed(2) + ' KM'
  //   } else {
  //     range = meter.toFixed(2) + ' M'
  //   }
  // }

  // return (
  //   <View>
  //     <Image className='room-card-2-cover' src={cover} mode='aspectFill' />
  //     <View active={active} className='room-card-2-content'>
  //       <View className='flex-row space-between w100'>
  //         <View className='text1 flex1'>{name}</View>
  //         <View className='text0 text-light'>{range}</View>
  //       </View>

  //       <View className='flex flex-row mt8 text-light'>
  //         <View style={{ marginRight: '6px' }}>
  //           <AtIcon prefixClass='iconfont' value='address' size='15' />
  //         </View>
  //         <View><Text className='text0'>{address}</Text></View>
  //       </View>
  //       <View className='flex flex-row-center mt8 text-light'>
  //         {appType !== 'studyroom'
  //           ? (
  //             <>
  //               <AtIcon
  //                 prefixClass='iconfont'
  //                 value='smart-door'
  //                 size='15'
  //                 className='mr16'
  //               />
  //               <Text className='text0'>{boxes}</Text>
  //             </>
  //             )
  //           : (
  //             <>
  //               <AtIcon
  //                 prefixClass='iconfont'
  //                 value='people'
  //                 size='15'
  //                 className='mr8'
  //               />
  //               <BusyIndicator fill={fill} lessIsGreen />
  //             </>
  //             )}
  //         {specialPromoteTag
  //           ? (
  //             <View className='flex ml16'>
  //               <View className='tag' style={{ backgroundColor: '#2948FF' }}>{specialPromoteTag}</View>
  //             </View>
  //             )
  //           : null}
  //       </View>
  //     </View>
  //   </View>
  // )
}