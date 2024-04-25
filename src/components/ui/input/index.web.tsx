import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    onTextChange?: (text: string) => void
  }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, onTextChange, onChange, ...props }, ref) => {

    const onChangeInner = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onTextChange) {
        onTextChange(e.target.value)
      } else {
        onChange?.(e)
      }
    }

    return (
      <input
        type={type}
        onChange={onChangeInner}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
