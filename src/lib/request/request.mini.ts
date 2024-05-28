import { request as TaroRequest } from '@tarojs/taro'

export async function request({
  url,
  method,
  header = {},
  payload = {}
}: {
  url: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  header?: Record<string, string>
  payload?: Record<string, any>
}) {
  const response = await TaroRequest({
    url,
    method,
    header,
    data: payload
  })
  
  const { data } = response
  if (data.error || typeof data === 'string') {
    throw (data.message || data)
  }

  return data
}