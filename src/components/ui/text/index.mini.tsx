import * as React from 'react'
import { Text as TaroText } from '@tarojs/components'
import { cn } from '@/lib/utils'

export interface TextProps extends React.ComponentPropsWithoutRef<typeof TaroText> {}

const Text = React.forwardRef<React.ElementRef<typeof TaroText>, TextProps>(
  ({ className, ...props }, ref) => {
    return (
      <TaroText
        className={cn('text-base text-foreground', className)}
        ref={ref}
        {...props}
      />
    )
  }
)

Text.displayName = 'Text'

export { Text }