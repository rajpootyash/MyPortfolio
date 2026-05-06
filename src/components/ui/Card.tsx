import * as React from "react"
import { cn } from "../../utils/cn"

export interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  spotlightColor?: string;
}

const Card = React.forwardRef<HTMLDivElement, SpotlightCardProps>(
  ({ className, children, spotlightColor = "rgba(255, 255, 255, 0.05)", ...props }, ref) => {
    const divRef = React.useRef<HTMLDivElement>(null)
    const [isFocused, setIsFocused] = React.useState(false)
    const [position, setPosition] = React.useState({ x: 0, y: 0 })
    const [opacity, setOpacity] = React.useState(0)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!divRef.current || isFocused) return

      const rect = divRef.current.getBoundingClientRect()
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }

    const handleFocus = () => {
      setIsFocused(true)
      setOpacity(1)
    }

    const handleBlur = () => {
      setIsFocused(false)
      setOpacity(0)
    }

    const handleMouseEnter = () => {
      setOpacity(1)
    }

    const handleMouseLeave = () => {
      setOpacity(0)
    }

    return (
      <div
        ref={(node) => {
          // @ts-ignore - internal ref assignment
          divRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#0a0a0a] text-[#f2f2f2] shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] transition-colors duration-300 hover:border-white/[0.15]",
          className
        )}
        {...props}
      >
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
          }}
        />
        <div className="relative z-10 flex h-full flex-col">
          {children}
        </div>
      </div>
    )
  }
)
Card.displayName = "Card"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 flex-1", className)} {...props} />
  )
)
CardContent.displayName = "CardContent"

export { Card, CardContent }
