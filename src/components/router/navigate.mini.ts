import Taro from '@tarojs/taro'

export function push (path: string) {
  Taro.navigateTo({ url: path })
}

export function pull () {
  Taro.navigateBack()
}