import * as React from "react"
import { cn } from "@/lib/utils"

export interface CatlifeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean
  variant?: "default" | "orange"
}

const CatlifeCard = React.forwardRef<HTMLDivElement, CatlifeCardProps>(
  ({ className, children, disabled = false, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col gap-4 rounded-3xl border-2 border-catlife-border p-6 transition-all duration-200",
          // Background variants
          variant === "default" && "bg-catlife-surface",
          variant === "orange" && "bg-catlife-primary",
          // Disabled state
          disabled && "pointer-events-none opacity-60",
          // Hover effect (only when not disabled)
          !disabled && "hover:shadow-md",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  },
)

CatlifeCard.displayName = "CatlifeCard"

export { CatlifeCard }
