"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { CatlifeButton } from "./catlife-button";
import { Input } from "./input";

export interface CatlifeHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  catsImage?: React.ReactNode;
  formTitle?: string;
  inputPlaceholder?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
}

const CatlifeHero = React.forwardRef<HTMLDivElement, CatlifeHeroProps>(
  (
    {
      className,
      title = "O plano de saúde pet para gatos exigentes.",
      subtitle = "O primeiro (e único) plano pet só para gatos com abrangência nacional.",
      catsImage,
      formTitle = "Encontre a opção ideal",
      inputPlaceholder = "Nome do seu pet",
      ctaLabel = "Vamos lá",
      onCtaClick,
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "flex w-full flex-wrap items-start gap-5 bg-catlife-primary-light px-14 py-15 overflow-hidden",
          className,
        )}
        {...props}
      >
        {/* Titles Section */}
        <div className="flex min-w-0 flex-1 flex-col items-start gap-8 whitespace-pre-wrap md:min-w-[497px] md:max-w-[497px]">
          <h1 className="font-roc-grotesk text-[80px] font-bold leading-none text-catlife-text-primary">
            {title.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < title.split("\n").length - 1 && <br aria-hidden="true" />}
              </React.Fragment>
            ))}
          </h1>
          <p className="font-roc-grotesk text-[23px] font-normal leading-[1.1] text-catlife-text-primary">
            {subtitle}
          </p>
        </div>

        {/* Cats Image */}
        {catsImage && (
          <div className="relative h-[363px] min-w-0 flex-1 md:w-[523px] md:flex-none">{catsImage}</div>
        )}

        {/* Floating Form Card */}
        <div className="flex w-full min-w-0 flex-col items-center justify-center gap-4 rounded-[32px] bg-catlife-surface/20 p-8 md:w-[288px] md:flex-none">
          <div className="flex w-full flex-col items-start gap-4">
            <p className="font-roc-grotesk text-xl font-medium leading-[1.2] text-center text-catlife-text-primary whitespace-pre-wrap w-full">
              {formTitle}
            </p>
            <div className="flex w-full items-center gap-[8px] rounded-[1000px] border border-catlife-surface bg-[rgba(255,250,243,0.2)] px-[16px] py-[4px]">
              <Input
                placeholder={inputPlaceholder}
                className="font-roc-grotesk text-[18px]! font-normal text-center text-catlife-text-secondary border-0 bg-transparent placeholder:text-catlife-text-secondary focus-visible:ring-0 h-auto p-0"
              />
            </div>
          </div>
          <CatlifeButton
            variant="dark"
            className="h-12 w-full px-8 py-5"
            onClick={onCtaClick}
          >
            {ctaLabel}
          </CatlifeButton>
        </div>
      </section>
    );
  },
);

CatlifeHero.displayName = "CatlifeHero";

export { CatlifeHero };

