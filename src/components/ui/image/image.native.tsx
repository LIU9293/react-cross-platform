import * as React from 'react'
import { Image as ExpoImage } from 'expo-image'

type ImageProps = Omit<React.ComponentPropsWithoutRef<typeof ExpoImage>, 'height' | 'width' | 'src'> & {
  height: string
  width: string
  src: string
}

export const Image = React.forwardRef<React.ElementRef<typeof ExpoImage>, ImageProps>(
  ({ height, width, src, ...props }, ref) => {
  return (
    <ExpoImage
      source={src}
      // @ts-expect-error
      height={height ? parseInt(height) : undefined}
      width={width ? parseInt(width) : undefined}
      {...props}
    />
  )
})