import * as React from 'react'
import { TextInput } from 'react-native'
import { cn } from '@/lib/utils'

const inputModeMap = {
  text: 'text',
  number: 'decimal',
  email: 'email',
  password: 'text',
}

const Input = React.forwardRef<
  React.ElementRef<typeof TextInput>,
  React.ComponentPropsWithoutRef<typeof TextInput> & {
    type?: string
  }
>(({ className, placeholderClassName, type, ...props }, ref) => {
  return (
    <TextInput
      ref={ref}
      className={cn(
        'h-12 rounded-md border border-input bg-background px-3 text-base lg:text-sm leading-[1.25] text-foreground placeholder:text-muted-foreground',
        props.editable === false && 'opacity-50',
        className
      )}
      inputMode={type
        ? inputModeMap[type as keyof typeof inputModeMap] as 'none' | 'decimal' | 'email' | 'text'
        : 'text'
      }
      placeholderClassName={cn('text-muted-foreground', placeholderClassName)}
      {...props}
    />
  )
})

Input.displayName = 'Input'

export { Input }