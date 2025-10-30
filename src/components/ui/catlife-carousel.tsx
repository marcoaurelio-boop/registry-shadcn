"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface CarouselProps {
  children: React.ReactNode[]
  defaultIndex?: number
  onSlideChange?: (index: number) => void
  className?: string
}

export function Carousel({ children, defaultIndex = 0, onSlideChange, className }: CarouselProps) {
  const [activeIndex, setActiveIndex] = React.useState(defaultIndex)

  const handleSlideChange = (newIndex: number) => {
    if (newIndex >= 0 && newIndex < children.length) {
      setActiveIndex(newIndex)
      onSlideChange?.(newIndex)
    }
  }

  return (
    <div className={cn("relative w-full", className)}>
      {/* Cards container */}
      <div className="flex items-center justify-center gap-6 px-4 py-8">
        {React.Children.map(children, (child, index) => {
          const isActive = index === activeIndex

          return (
            <div
              key={index}
              onClick={() => handleSlideChange(index)}
              className={cn(
                "transition-all duration-300 ease-out cursor-pointer",
                isActive ? "scale-110 z-10" : "scale-90 hover:scale-95",
              )}
            >
              {React.isValidElement(child)
                ? React.cloneElement(child as React.ReactElement<{ disabled?: boolean }>, {
                    disabled: !isActive,
                  })
                : child}
            </div>
          )
        })}
      </div>

      {/* Pagination dots */}
      <div className="flex items-center justify-center gap-2 pb-4">
        {React.Children.map(children, (_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={cn(
              "h-3 w-3 rounded-full transition-colors duration-200",
              index === activeIndex ? "bg-catlife-primary" : "bg-catlife-text-muted/30 hover:bg-catlife-text-muted/50",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
