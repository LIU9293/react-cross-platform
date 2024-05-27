import { router } from 'expo-router'

export function push (path: string) {
  router.push(path)
}

export function pull () {
  router.back()
}