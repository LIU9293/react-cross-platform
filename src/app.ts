// entry point of tarojs / miniapp
import { PropsWithChildren } from 'react'
import './assets/global.css'
import './assets/miniapp.css'

export default function App({ children }: PropsWithChildren<any>) {
  return children
}