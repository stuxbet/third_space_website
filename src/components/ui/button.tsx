import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "angular-shell angular-border btn-angular inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#02D7F2]/60 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#02D7F2] text-black shadow-[0_0_16px_rgba(2,215,242,0.35)] hover:bg-[#02D7F2]/85 [--angle-border-color:rgba(2,215,242,0.7)]",
        destructive:
          "bg-[#FF1111] text-black shadow-[0_0_16px_rgba(255,17,17,0.4)] hover:bg-[#FF1111]/80 [--angle-border-color:rgba(255,17,17,0.7)]",
        outline:
          "bg-transparent text-[#02D7F2] hover:bg-[#02D7F2]/10 [--angle-border-color:rgba(2,215,242,0.7)]",
        secondary:
          "bg-black text-[#F2E900] hover:bg-black/80 [--angle-border-color:rgba(242,233,0,0.7)]",
        ghost:
          "text-[#02D7F2] hover:bg-[#02D7F2]/10 [--angle-border-color:rgba(2,215,242,0.5)]",
        link:
          "bg-transparent text-[#02D7F2] underline-offset-4 hover:underline before:hidden after:hidden [--angle-clip:polygon(0_0,100%_0,100%_100%,0_100%)] [--angle-border-color:transparent]",
      },
      size: {
        default: "px-8 py-3 text-sm",
        sm: "px-6 py-2 text-xs",
        lg: "px-10 py-4 text-base",
        icon: "p-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
