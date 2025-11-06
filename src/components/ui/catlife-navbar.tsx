"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { CatlifeButton } from "./catlife-button";
import { Avatar, AvatarImage, AvatarFallback } from "./avatar";

export interface CatlifeNavbarProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  menuItems?: Array<{ label: string; href?: string; onClick?: () => void }>;
  onMenuClick?: () => void;
  userAvatar?: string;
  userInitials?: string;
}

const CatlifeNavbar = React.forwardRef<HTMLElement, CatlifeNavbarProps>(
  (
    {
      className,
      logo,
      menuItems = [
        { label: "Planos" },
        { label: "Como funciona" },
        { label: "Rede credenciada" },
      ],
      onMenuClick,
      userAvatar,
      userInitials = "U",
      ...props
    },
    ref,
  ) => {
    return (
      <header
        ref={ref as React.Ref<HTMLElement>}
        className={cn(
          "sticky top-0 z-10 flex w-full items-center justify-end gap-2 px-0 py-4",
          className,
        )}
        {...props}
      >
        <div className="flex w-full items-center gap-2 px-0 py-4">
          {/* Menu Icon */}
          <button
            type="button"
            onClick={onMenuClick}
            className="flex size-14 items-center justify-center rounded-full bg-catlife-surface/20 px-[12.444px] py-[10.889px] transition-all hover:bg-catlife-surface/30"
            aria-label="Open menu"
          >
            <Menu className="size-9.5" />
          </button>

          {/* Nav Menu */}
          <nav className="flex h-14 items-center gap-4 rounded-full bg-catlife-surface/20 pl-4 pr-6 py-2">
            {logo && <div className="h-8 w-[158.652px] shrink-0">{logo}</div>}
            <div className="flex h-14 items-center justify-center gap-6 rounded-full px-0 py-4 font-roc-grotesk text-lg font-medium leading-[1.2] text-catlife-text-primary">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={item.onClick}
                  className="relative shrink-0 cursor-pointer transition-colors hover:text-catlife-primary"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          {/* User Buttons */}
          <div className="flex h-14 items-center gap-2 rounded-full bg-catlife-surface/20 p-2">
            <button
              type="button"
              className="flex h-10 items-center justify-center gap-2.5 rounded-full border border-catlife-border bg-transparent px-4 py-2.75 font-roc-grotesk text-base font-bold leading-normal text-catlife-text-primary transition-all hover:bg-catlife-surface/10"
            >
              Entrar
            </button>
            <CatlifeButton variant="cta" size="sm" className="h-10 px-4 py-2.75">
              Simular plano
            </CatlifeButton>
            <div className="flex h-9 items-center gap-1">
              <Avatar className="size-10">
                {userAvatar && <AvatarImage src={userAvatar} alt="User" />}
                <AvatarFallback className="bg-catlife-primary text-catlife-text-inverse">
                  {userInitials}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>
    );
  },
);

CatlifeNavbar.displayName = "CatlifeNavbar";

export { CatlifeNavbar };

