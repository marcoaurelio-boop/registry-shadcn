"use client";

import { CatlifeButton } from "@/components/ui/catlife-button";

export function CatlifeButtonComponent() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Catlife Button Variants</h3>

        <div className="flex flex-wrap gap-4">
          <CatlifeButton variant="primary">Primary Button</CatlifeButton>
          <CatlifeButton variant="cta">CTA Button</CatlifeButton>
          <CatlifeButton variant="dark">Dark Button</CatlifeButton>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Button Sizes</h3>

        <div className="flex flex-wrap items-center gap-4">
          <CatlifeButton size="sm">Small</CatlifeButton>
          <CatlifeButton size="default">Default</CatlifeButton>
          <CatlifeButton size="lg">Large</CatlifeButton>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Custom Colors</h3>

        <div className="flex flex-wrap gap-4">
          <CatlifeButton primaryColor="#10b981" secondaryColor="#ffffff">
            Custom Green
          </CatlifeButton>
          <CatlifeButton primaryColor="#3b82f6" secondaryColor="#ffffff">
            Custom Blue
          </CatlifeButton>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Disabled State</h3>

        <div className="flex flex-wrap gap-4">
          <CatlifeButton disabled>Disabled Button</CatlifeButton>
          <CatlifeButton variant="cta" disabled>Disabled CTA</CatlifeButton>
        </div>
      </div>
    </div>
  );
}
