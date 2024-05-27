import * as React from 'react'
import { Image as ExpoImage } from 'expo-image'

type ImageProps = Omit<React.ComponentPropsWithoutRef<typeof ExpoImage>, 'height' | 'width' | 'src'> & {
  height?: number
  width?: number
  src: string
}

export const Image = React.forwardRef<React.ElementRef<typeof ExpoImage>, ImageProps>(
  ({ height, width, src, ...props }, ref) => {
  return (
    <ExpoImage
      source={src}
      style={{ height: height || '100%', width: width || '100%'}}
      {...props}
    />
  )
})