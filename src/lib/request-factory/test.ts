import { createRequestFactory } from './request-factory-bun'
import { transformType, TRoom, TRoomServer } from '../../types/room'

const useGlobalStore = createRequestFactory<
  { token: string },
  { token: string | null },
  undefined
>({
  url: '/app/auth',
  headers: { appid: 'wx9949952662bbb0c4' },
  transformFunction: (data) => {
    return { token: data.token }
  }
})

const useTestStore = createRequestFactory<
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