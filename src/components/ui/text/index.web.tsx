import * as React from "react"
import { cn } from '@/lib/utils'

export interface TextProps 
  extends React.ComponentPropsWithoutRef<'p'> {}

export function Text ({ className, ...props }: TextProps) {
  return (
    <p
      className={cn('text-base text-foreground', className)}
      {...props}
    />
  )
}