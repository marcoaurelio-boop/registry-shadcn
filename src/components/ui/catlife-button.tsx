import type * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const catlifeButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-bold transition-all duration-200 ease-in-out disabled:pointer-events-none disabled:opacity-50 outline-none border-2 font-roc-grotesk",
  {
    variants: {
      variant: {
        primary:
          "bg-catlife-surface text-catlife-text-primary border-catlife-border shadow-catlife-default hover:shadow-catlife-hover hover:-translate-x-[1px] hover:-translate-y-[1px] active:shadow-catlife-active active:translate-x-[1px] active:translate-y-[1px]",
        cta: "bg-catlife-primary text-catlife-text-primary border border-catlife-border text-[20px] shadow-catlife-default hover:bg-catlife-primary-hover hover:shadow-catlife-hover hover:-translate-x-[1px] hover:-translate-y-[1px] active:bg-catlife-primary-active active:shadow-catlife-active active:translate-x-[1px] active:translate-y-[1px]",
        dark: "bg-catlife-text-primary text-catlife-text-inverse border-catlife-primary shadow-[2px_2px_0px_0px_rgba(249,152,48,1)] hover:border-catlife-primary-hover hover:shadow-[3px_3px_0px_0px_rgba(249,152,48,1)] hover:-translate-x-[1px] hover:-translate-y-[1px] active:border-catlife-primary-active active:shadow-[1px_1px_0px_0px_rgba(242,113,0,1)] active:translate-x-[1px] active:translate-y-[1px]",
      },
      size: {
        default: "h-12 px-8 py-3 rounded-full",
        lg: "h-14 px-10 py-4 rounded-full text-lg",
        sm: "h-10 px-6 py-2 rounded-full text-sm",
      },
    },
    compoundVariants: [
      {
        variant: "cta",
        size: "default",
        class: "h-auto px-8 py-5",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
)

interface CatlifeButtonProps extends React.ComponentProps<"button">, VariantProps<typeof catlifeButtonVariants> {
  asChild?: boolean
  primaryColor?: string
  secondaryColor?: string
}

function CatlifeButton({
  className,
  variant,
  size,
  asChild = false,
  primaryColor,
  secondaryColor,
  style,
  ...props
}: CatlifeButtonProps) {
  const Comp = asChild ? Slot : "button"

  const customStyle =
    primaryColor || secondaryColor
      ? {
          backgroundColor: primaryColor,
          color: secondaryColor,
          ...style,
        }
      : style

  return <Comp className={cn(catlifeButtonVariants({ variant, size, className }))} style={customStyle} {...props} />
}

export { CatlifeButton, catlifeButtonVariants }
