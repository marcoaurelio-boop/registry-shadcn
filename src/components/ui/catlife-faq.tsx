"use client";

import * as React from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CatlifeFAQProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  items?: FAQItem[];
  illustration?: React.ReactNode;
}

const CatlifeFAQ = React.forwardRef<HTMLDivElement, CatlifeFAQProps>(
  (
    {
      className,
      title = "Perguntas frequentes",
      items = [],
      illustration,
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn("bg-catlife-primary-light px-[24px] py-[80px] gap-[24px] flex flex-col items-center", className)}
        {...props}
      >
        <div className="flex gap-[120px] px-[100px] w-full">
          {/* Left Side - Title and Illustration */}
          <div className="flex flex-col flex-1 min-w-0 min-h-0">
            <h2 className="font-roc-grotesk text-[46px] font-medium leading-[1.05] text-catlife-text-primary w-[347px] whitespace-pre-wrap">
              {title}
            </h2>
            {illustration && <div>{illustration}</div>}
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className="flex flex-col flex-1 min-w-0 min-h-0">
            <Accordion type="single" collapsible className="w-full flex flex-col gap-[16px]">
              {items.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-[16px] border border-catlife-border bg-catlife-surface p-[16px] last:!border-b"
                >
                  <AccordionTrigger className="font-roc-grotesk text-[20px] font-normal leading-[1.1] text-catlife-text-primary hover:no-underline gap-[8px] items-center [&[data-state=open]>svg:last-child]:rotate-45">
                    <span className="flex-1 min-w-0 min-h-0 leading-[1.1] whitespace-pre-wrap">{item.question}</span>
                    <Plus className="size-[28px] shrink-0 text-catlife-primary transition-transform duration-200" />
                  </AccordionTrigger>
                  <AccordionContent className="font-roc-grotesk text-base font-normal text-catlife-text-secondary">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    );
  },
);

CatlifeFAQ.displayName = "CatlifeFAQ";

export { CatlifeFAQ };

