import { transformType, TRoom, TRoomServer } from '@/types/room'
import { createRequestFactory } from '@/lib/request-factory'

export const useRoomList = createRequestFactory<
  { rooms: TRoomServer[] },
  TRoom[],
  undefined
>({
  url: '/app/summary',
  headers: { appid: 'wx9949952662bbb0c4' },
  transformFunction: (data) => {
    return data.rooms.map(room => transformType(room))
  }
})