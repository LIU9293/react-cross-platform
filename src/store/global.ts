import { createRequestFactory } from '@/lib/request-factory'

export const useGlobalStore = createRequestFactory<
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