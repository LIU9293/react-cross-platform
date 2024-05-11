import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { Button as TaroButton } from '@tarojs/components'
import { Text } from '@/components/ui/text'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'group flex items-center justify-center rounded-md',
  {
    variants: {
      variant: {
        default: 'bg-primary active:opacity-90',
        destructive: 'bg-destructive active:opacity-90',
        outline:
          'border border-input bg-background active:bg-accent',
        secondary: 'bg-secondary active:opacity-80',
        ghost: 'active:bg-accent'
      },
      size: {
        default: 'h-10 px-4 py-2 native:h-12 native:px-5 native:py-3',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8 native:h-14',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

const buttonTextVariants = cva(
  'text-sm native:text-base font-medium text-foreground',
  {
    variants: {
      variant: {
        default: 'text-primary-foreground',
        destructive: 'text-destructive-foreground',
        outline: 'group-active:text-accent-foreground',
        secondary: 'text-secondary-foreground group-active:text-secondary-foreground',
        ghost: 'group-active:text-accent-foreground',
        link: 'text-primary group-active:underline',
      },
      size: {
        default: '',
        sm: '',
        lg: 'native:text-lg',
        icon: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

type ButtonProps = React.ComponentPropsWithoutRef<typeof TaroButton> &
  VariantProps<typeof buttonVariants>

const Button = React.forwardRef<React.ElementRef<typeof TaroButton>, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (      
      <TaroButton
        className={cn(
          props.disabled && 'opacity-50',
          buttonVariants({ variant, size, className })
        )}
        ref={ref}
        {...props}
      >
        {typeof children === 'string'
          ? <Text>{children}</Text> 
          : children}
      </TaroButton>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonTextVariants, buttonVariants }

export type { ButtonProps }