import { getPlatform } from '@/lib/utils'
import { pageConfig } from './config'
import { push, pull } from './navigate'

type RouteParams = {
  params?: { [key: string]: string | number | boolean },
  query?: { [key: string]: string | number | boolean }
}

type PushParams = {
  action: 'push',
  pageKey: keyof typeof pageConfig
} & RouteParams

type PullParams = {
  action: 'pull'
} & RouteParams

type RouteOptions = PushParams | PullParams

export function route (options: RouteOptions) {
  const { action, params, query } = options

  if (action === 'pull') {
    return pull()
  }

  const page = pageConfig[options.pageKey]
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
  }
}