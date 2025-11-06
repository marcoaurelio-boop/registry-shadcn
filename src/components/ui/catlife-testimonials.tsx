"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface Testimonial {
  text: string;
  author: string;
  avatar?: string;
}

export interface CatlifeTestimonialsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  bannerText?: string;
  testimonials?: Testimonial[];
}

const CatlifeTestimonials = React.forwardRef<
  HTMLDivElement,
  CatlifeTestimonialsProps
>(
  (
    {
      className,
      bannerText = "Mais de 10.000 gatos protegidos",
      testimonials = [],
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn("bg-catlife-background-alt py-24", className)}
        {...props}
      >
        {/* Banner Ribbon */}
        {bannerText && (
          <div className="mb-16 flex items-center justify-center">
            <div
              className="flex items-center justify-center border-[1.572px] border-catlife-border bg-catlife-primary px-8 py-4"
              style={{ transform: "rotate(9.187deg)" }}
            >
              <p className="font-roc-grotesk text-[46px] font-medium leading-normal text-catlife-text-primary">
                {bannerText}
              </p>
            </div>
          </div>
        )}

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 rounded-full"
            >
              <div className="size-[172px] rounded-full bg-catlife-surface" />
              <p className="font-roc-grotesk text-[23px] font-normal leading-normal text-catlife-text-primary text-center">
                {testimonial.text}
              </p>
              <p className="font-roc-grotesk text-[23px] font-medium leading-normal text-catlife-text-primary">
                {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  },
);

CatlifeTestimonials.displayName = "CatlifeTestimonials";

export { CatlifeTestimonials };

