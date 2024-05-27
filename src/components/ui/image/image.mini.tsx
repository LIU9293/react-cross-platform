import { Image as TaroImage } from '@tarojs/components'

type ButtonProps = React.ComponentPropsWithoutRef<typeof TaroImage> & {
  width?: number
  height?: number
}

export function Image ({ src, width, height }: ButtonProps) {
  return <TaroImage 
    src={src}
    style={{
      width: width ? `${width}px` : undefined,
      height: height ? `${height}px` : undefined
    }}
  />
}