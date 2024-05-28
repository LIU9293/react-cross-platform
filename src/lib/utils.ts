import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// TODO: fix this, currently in taro environment, the window object is still available
export function getPlatform () {
  // @ts-ignore
  if (window && window.__REACT_CROSS_PLATFORM_IS_WEB__) {
    return 'web'
  }

  if (!!process.env.TARO_ENV) {
    return 'mini'
  }

  return 'native'
}