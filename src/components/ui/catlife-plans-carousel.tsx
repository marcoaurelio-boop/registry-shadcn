"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Carousel } from "./catlife-carousel";
import { CatlifeButton } from "./catlife-button";

export interface Plan {
  name: string;
  price: string;
  description: string;
  features?: string[];
}

export interface CatlifePlansCarouselProps
  extends React.HTMLAttributes<HTMLDivElement> {
  plans?: Plan[];
  onSimulateClick?: (planIndex: number) => void;
}

const CatlifePlansCarousel = React.forwardRef<
  HTMLDivElement,
  CatlifePlansCarouselProps
>(({ className, plans = [], onSimulateClick, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("w-full", className)} {...props}>
      <Carousel defaultIndex={0}>
        {plans.map((plan, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col gap-6 border-2 border-catlife-border bg-catlife-primary p-8 transition-all duration-200 ease-in-out",
              "opacity-40 rounded-[32.722px] shadow-catlife-default",
              "hover:shadow-catlife-hover hover:-translate-x-[1px] hover:-translate-y-[1px]",
              "active:shadow-catlife-active active:translate-x-[1px] active:translate-y-[1px]",
              "data-[active=true]:opacity-100 data-[active=true]:rounded-[40.902px] data-[active=true]:p-10",
            )}
          >
            <div className="flex flex-col gap-4">
              <h3 className="font-roc-grotesk text-[24.541px] font-medium leading-normal text-catlife-text-primary">
                {plan.name}
              </h3>
              <div className="font-roc-grotesk text-[56.241px] font-bold leading-normal text-catlife-text-primary">
                {plan.price}
              </div>
              <p className="font-roc-grotesk text-[18.406px] font-normal leading-normal text-catlife-text-primary">
                {plan.description}
              </p>
            </div>
            {plan.features && plan.features.length > 0 && (
              <ul className="flex flex-col gap-2">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="font-roc-grotesk text-base font-normal text-catlife-text-primary"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            )}
            <CatlifeButton
              variant="primary"
              className="w-full"
              onClick={() => onSimulateClick?.(index)}
            >
              Simular
            </CatlifeButton>
          </div>
        ))}
      </Carousel>
    </div>
  );
});

CatlifePlansCarousel.displayName = "CatlifePlansCarousel";

export { CatlifePlansCarousel };

