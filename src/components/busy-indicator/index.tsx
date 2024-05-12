import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { View } from '@/components/ui'

const dotVariants = cva('w-[4px] h-[12px] rounded-[2px]', {
  variants: {
    bgColor: {
      default: 'bg-[#939393]',
      green: 'bg-[#08CB27]',
      yellow: 'bg-[#E89924]',
      red: 'bg-[#B20404]',
    },
  },
  defaultVariants: {
    bgColor: 'default',
  },
})

function Dot ({ bgColor = 'default' }: {
  bgColor?: 'default' | 'green' | 'yellow' | 'red'
}) {
  return (
    <View
      className={cn(dotVariants({ bgColor }))}
    />
  )
}

/**
 * fill 1,2,3,4,5
 */
export function BusyIndicator ({ fill = 0, lessIsGreen = false }) {
  let bgColor: 'default' | 'green' | 'yellow' | 'red'
  switch (fill) {
    case 1:
      bgColor = lessIsGreen ? 'green' : 'red'
      break
    case 2:
      bgColor = lessIsGreen ? 'green' : 'yellow'
      break
    case 3:
      bgColor = 'green'
      break
    case 4:
      bgColor = lessIsGreen ? 'yellow' : 'green'
      break
    case 5:
      bgColor = lessIsGreen ? 'red' : 'green'
      break
    default:
      bgColor = 'green'
      break
  }

  return (
    <View className='flex flex-row gap-1'>
      <Dot bgColor={fill >= 1 ? bgColor : 'default'} />
      <Dot bgColor={fill >= 2 ? bgColor : 'default'} />
      <Dot bgColor={fill >= 3 ? bgColor : 'default'} />
      <Dot bgColor={fill >= 4 ? bgColor : 'default'} />
      <Dot bgColor={fill >= 5 ? bgColor : 'default'} />
    </View>
  )
}
