"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { CatlifeButton } from "./catlife-button";

export interface CatlifeTelemedicineProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  image?: React.ReactNode;
  ctaLabel?: string;
  onCtaClick?: () => void;
}

const CatlifeTelemedicine = React.forwardRef<
  HTMLDivElement,
  CatlifeTelemedicineProps
>(
  (
    {
      className,
      title = "Telemedicina",
      description,
      image,
      ctaLabel = "Saiba mais",
      onCtaClick,
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn("bg-catlife-surface py-16", className)}
        {...props}
      >
        <div className="flex h-[562px] w-[1368px] items-center justify-between rounded-[56px] bg-catlife-primary-light px-8">
          <div className="flex flex-col gap-6 px-8">
            <h2 className="font-roc-grotesk text-[46px] font-medium leading-[1.15] text-catlife-text-primary">
              {title}
            </h2>
            {description && (
              <p className="font-roc-grotesk text-[23px] font-normal leading-normal text-catlife-text-primary">
                {description}
              </p>
            )}
            <CatlifeButton variant="cta" onClick={onCtaClick} className="w-fit">
              {ctaLabel}
            </CatlifeButton>
          </div>
          {image && (
            <div className="h-full overflow-hidden rounded-br-[56px] rounded-tr-[56px]">
              {image}
            </div>
          )}
        </div>
      </section>
    );
  },
);

CatlifeTelemedicine.displayName = "CatlifeTelemedicine";

export { CatlifeTelemedicine };

