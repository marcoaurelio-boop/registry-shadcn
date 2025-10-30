"use client";

import { PillContainer } from "@/components/ui/pill-container";
import { CatlifeButton } from "@/components/ui/catlife-button";

export function PillContainerComponent() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Pill Container</h3>
        <p className="text-catlife-text-secondary">
          A glassmorphism-style container with rounded pill shape, perfect for navigation bars or floating UI elements.
        </p>

        <div className="space-y-6">
          <PillContainer>
            <span className="text-catlife-text-primary font-medium">Navigation Item</span>
            <CatlifeButton variant="primary" size="sm">
              Action
            </CatlifeButton>
          </PillContainer>

          <PillContainer>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-catlife-primary rounded-full flex items-center justify-center">
                <span className="text-sm">🐱</span>
              </div>
              <span className="text-catlife-text-primary font-medium">Cat Profile</span>
            </div>
            <div className="flex gap-2">
              <CatlifeButton variant="primary" size="sm">
                View
              </CatlifeButton>
              <CatlifeButton variant="cta" size="sm">
                Edit
              </CatlifeButton>
            </div>
          </PillContainer>

          <PillContainer>
            <div className="flex items-center gap-2">
              <span className="text-catlife-text-primary font-medium">Search</span>
              <input
                type="text"
                placeholder="Find cats..."
                className="bg-transparent border-none outline-none text-catlife-text-primary placeholder:text-catlife-text-muted flex-1"
              />
            </div>
            <CatlifeButton variant="dark" size="sm">
              🔍
            </CatlifeButton>
          </PillContainer>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-catlife-background rounded-2xl border border-catlife-border">
            <h4 className="font-semibold text-catlife-text-primary mb-2">Glassmorphism Effect</h4>
            <p className="text-sm text-catlife-text-secondary">
              Beautiful backdrop blur and transparency effects for a modern look.
            </p>
          </div>
          <div className="p-4 bg-catlife-background rounded-2xl border border-catlife-border">
            <h4 className="font-semibold text-catlife-text-primary mb-2">Flexible Layout</h4>
            <p className="text-sm text-catlife-text-secondary">
              Automatically distributes content with space-between layout.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Usage Examples</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-catlife-text-primary mb-2">Floating Navigation</h4>
            <PillContainer className="max-w-md">
              <div className="flex items-center gap-4">
                <span className="text-catlife-text-primary">Home</span>
                <span className="text-catlife-text-muted">About</span>
                <span className="text-catlife-text-muted">Contact</span>
              </div>
              <div className="w-2 h-2 bg-catlife-primary rounded-full"></div>
            </PillContainer>
          </div>

          <div>
            <h4 className="font-medium text-catlife-text-primary mb-2">Status Indicator</h4>
            <PillContainer className="max-w-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-catlife-accent-success rounded-full"></div>
                <span className="text-catlife-text-primary font-medium">System Online</span>
              </div>
              <span className="text-xs text-catlife-text-muted">99.9% uptime</span>
            </PillContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
