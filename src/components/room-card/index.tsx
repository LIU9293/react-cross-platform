import { Text, View } from '@/components/ui'
import { distance } from '@/lib/utils'
// import BusyIndicator from '@components/BusyIndicator'
// import { getFillByMinMax } from '@utils'
// import { AtIcon } from '@components/TaroUI'
// import { useSelector } from 'react-redux'
// import t from '@i18n'
// import './style.css'

export function RoomCard ({
  // id,
  // cover,
  // name,
  // location,
  // address,
  // allSeats,
  // availableSeats,
  // onClick,
  // active = true,
  // longitude,
  // latitude,
  // specialPromoteTag,
  // boxes
}) {
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