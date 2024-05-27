import { View } from '@/components/ui'

export function ThemedIconCircle ({ top, left, color = '#2948FF' }: {
  top?: number
  left?: number
  color?: string
}) {
  return (
    <View
      className={`absolute w-[26px] h-[26px] z-10 rounded-full`}
      style={{ backgroundColor: color, top, left }}
    />
  )
}
