"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface FooterLink {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface FooterColumn {
  title?: string;
  links?: FooterLink[];
}

export interface CatlifeFooterProps
  extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  columns?: FooterColumn[];
  copyright?: string;
}

const CatlifeFooter = React.forwardRef<HTMLElement, CatlifeFooterProps>(
  (
    {
      className,
      logo,
      columns = [],
      copyright = "© 2024 Catlife. Todos os direitos reservados.",
      ...props
    },
    ref,
  ) => {
    return (
      <footer
        ref={ref as React.Ref<HTMLElement>}
        className={cn(
          "border-t border-catlife-text-secondary bg-catlife-primary-light pb-[40px] pt-[60px] px-[24px] gap-[48px] flex flex-col items-center justify-center",
          className,
        )}
        {...props}
      >
        <div className="flex flex-col gap-[68px] items-start w-full">
          <div className="flex flex-col gap-[60px] items-start w-full">
            {/* Navigation */}
            <div className="flex items-center w-full">
              <div className="flex gap-[99px] items-start">
                {columns.map((column, columnIndex) => (
                  <div key={columnIndex} className="flex flex-col gap-[8px] items-start">
                    {column.title && (
                      <p className="font-roc-grotesk text-[16px] font-normal leading-[24px] text-catlife-text-primary">
                        {column.title}
                      </p>
                    )}
                    {column.links && column.links.length > 0 && (
                      <nav className="flex flex-col gap-[8px] items-start">
                        {column.links.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.href}
                            onClick={link.onClick}
                            className="font-roc-grotesk text-[16px] font-normal leading-[24px] text-catlife-text-secondary transition-colors hover:text-catlife-text-primary"
                          >
                            {link.label}
                          </a>
                        ))}
                      </nav>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Logo and Attribution */}
            <div className="flex items-end justify-between w-full">
              {logo && <div className="flex items-start">{logo}</div>}
              <div className="flex flex-col gap-[16px] items-end justify-center">
                <div className="flex gap-[8px] items-center">
                  <p className="font-roc-grotesk text-[14px] font-normal leading-[1.5] text-catlife-text-secondary whitespace-nowrap">
                    Powered by
                  </p>
                  {/* Powered by logo placeholder - should be replaced with actual logo */}
                  <div className="h-[7px] w-[88px] bg-catlife-text-secondary/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  },
);

CatlifeFooter.displayName = "CatlifeFooter";

export { CatlifeFooter };

