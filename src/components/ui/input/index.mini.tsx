import * as React from 'react'
import { Input as TaroInput } from '@tarojs/components'
import { cn } from '@/lib/utils'

const Input = React.forwardRef<
  React.ElementRef<typeof TaroInput>,
  React.ComponentPropsWithoutRef<typeof TaroInput>
>(({ className, disabled, ...props }, ref) => {
  return (
    <TaroInput
      ref={ref}
      className={cn(
        'h-12 rounded-md border border-input bg-background px-3 text-base lg:text-sm leading-[1.25] text-foreground placeholder:text-muted-foreground',
        disabled && 'opacity-50',
        className
      )}
      {...props}
    />
  )
})

Input.displayName = 'Input'

export { Input }
