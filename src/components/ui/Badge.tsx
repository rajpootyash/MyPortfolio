import * as React from "react"
import { cn } from "../../utils/cn"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "glow"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "border-white/[0.08] bg-white/[0.03] text-[#f2f2f2]",
    secondary: "border-white/[0.05] bg-[#0a0a0a] text-[#8a8f98]",
    outline: "text-[#8a8f98] border-white/[0.08]",
    glow: "border-indigo-500/30 bg-indigo-500/10 text-indigo-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }
