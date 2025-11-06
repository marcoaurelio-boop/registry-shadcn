"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface CatlifeInfoCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  variant?: "orange-500" | "orange-400" | "orange-300" | "orange-200";
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: string;
  height?: string;
  padding?: {
    top?: string;
    bottom?: string;
    horizontal?: string;
  };
}

const CatlifeInfoCard = React.forwardRef<HTMLDivElement, CatlifeInfoCardProps>(
  (
    {
      className,
      variant = "orange-400",
      icon,
      title,
      description,
      height,
      padding,
      children,
      ...props
    },
    ref,
  ) => {
    const variantClasses = {
      "orange-500": "bg-catlife-primary-dark rounded-[56px]",
      "orange-400": "bg-catlife-primary rounded-[56px]",
      "orange-300": "bg-catlife-primary-hover rounded-[48px]",
      "orange-200": "bg-catlife-primary-light rounded-[48px]",
    };

    // Default padding based on variant
    const defaultPadding = {
      "orange-500": { top: "pt-[104px]", bottom: "pb-[56px]", horizontal: "px-[32px]" },
      "orange-400": { top: "pt-[48px]", bottom: "pb-[56px]", horizontal: "px-[32px]" },
      "orange-300": { top: "pt-8", bottom: "pb-8", horizontal: "px-8" },
      "orange-200": { top: "pt-8", bottom: "pb-8", horizontal: "px-8" },
    };

    // Use provided padding or default for variant
    const paddingTop = padding?.top || defaultPadding[variant].top;
    const paddingBottom = padding?.bottom || defaultPadding[variant].bottom;
    const paddingHorizontal = padding?.horizontal || defaultPadding[variant].horizontal;

    // Default height for variants 1 and 2
    const defaultHeight = (variant === "orange-500" || variant === "orange-400") ? "h-[500px]" : "";

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-between border-2 border-catlife-border",
          variantClasses[variant],
          height || defaultHeight,
          paddingTop,
          paddingBottom,
          paddingHorizontal,
          className,
        )}
        {...props}
      >
        {icon && <div className="flex items-center justify-center">{icon}</div>}
        {title && (
          <div className="font-lato text-[30px] font-semibold leading-[1.1] text-catlife-text-variant-2 text-center whitespace-pre-wrap">
            {title}
          </div>
        )}
        {description && (
          <p className="font-roc-grotesk text-base font-normal text-catlife-text-primary">
            {description}
          </p>
        )}
        {children}
      </div>
    );
  },
);

CatlifeInfoCard.displayName = "CatlifeInfoCard";

export { CatlifeInfoCard };

