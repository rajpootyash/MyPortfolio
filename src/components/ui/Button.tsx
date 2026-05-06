import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "../../utils/cn"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "primary" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]"
    
    const variants = {
      default: "bg-[#ffffff] text-black hover:bg-[#e6e6e6] shadow-[inset_0_1px_0_rgba(255,255,255,1)]",
      primary: "bg-[#ffffff] text-black hover:bg-[#e6e6e6] shadow-[inset_0_1px_0_rgba(255,255,255,1)]",
      outline: "border border-white/[0.08] bg-[#0a0a0a] hover:bg-[#111111] text-[#f2f2f2] shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]",
      ghost: "hover:bg-white/[0.04] hover:text-[#f2f2f2] text-[#8a8f98]",
    }
    
    const sizes = {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9",
    }

    return (
      <Comp
        className={cn(baseStyles, variants[variant === "gradient" as any ? "primary" : variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
