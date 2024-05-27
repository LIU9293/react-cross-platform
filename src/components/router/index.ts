import { getPlatform } from '@/lib/utils'
import { pageConfig } from './config'
import { push, pull } from './navigate'

export function route ({
  action = 'push',
  pageKey,
  params,
  query
}: {
  action?: 'push' | 'pull',
  pageKey: keyof typeof pageConfig,
  params?: { [key: string]: string | number | boolean },
  query?: { [key: string]: string | number | boolean }
}) {

  const page = pageConfig[pageKey]
  const platform = getPlatform()
  console.log(platform)
  let path = page[platform]

  if (params) {
    Object.keys(params).forEach(key => {
      path = path.replace(`:${key}`, params[key].toString())
    })
  }

  if (query) {
    const queryString = Object.keys(query).map(key => `${key}=${query[key]}`).join('&')
    path = `${path}?${queryString}`
  }

  if (action === 'push') {
    push(path)
  } else if (action === 'pull') {
    pull()
  }
}