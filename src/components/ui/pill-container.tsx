import * as React from "react"
import { cn } from "@/lib/utils"

export interface PillContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const PillContainer = React.forwardRef<HTMLDivElement, PillContainerProps>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-between",
        "bg-catlife-background/80",
        "backdrop-blur-xl backdrop-saturate-150",
        "border-2 border-white/60",
        "rounded-full",
        "px-6 py-3",
        "w-full",
        "gap-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
})

PillContainer.displayName = "PillContainer"

export { PillContainer }
