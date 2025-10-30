"use client";

import { CatlifeCard } from "@/components/ui/catlife-card";
import { CatlifeButton } from "@/components/ui/catlife-button";

export function CatlifeCardComponent() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Catlife Card Variants</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CatlifeCard>
            <h4 className="text-xl font-bold text-catlife-text-primary">Default Card</h4>
            <p className="text-catlife-text-secondary">
              This is a default Catlife card with the standard background and styling.
            </p>
            <CatlifeButton variant="primary" size="sm">
              Learn More
            </CatlifeButton>
          </CatlifeCard>

          <CatlifeCard variant="orange">
            <h4 className="text-xl font-bold text-catlife-text-primary">Orange Card</h4>
            <p className="text-catlife-text-secondary">
              This is an orange variant of the Catlife card with a vibrant background.
            </p>
            <CatlifeButton variant="dark" size="sm">
              Get Started
            </CatlifeButton>
          </CatlifeCard>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Disabled State</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CatlifeCard disabled>
            <h4 className="text-xl font-bold text-catlife-text-primary">Disabled Card</h4>
            <p className="text-catlife-text-secondary">
              This card is disabled and shows reduced opacity with no hover effects.
            </p>
            <CatlifeButton variant="primary" size="sm" disabled>
              Disabled Action
            </CatlifeButton>
          </CatlifeCard>

          <CatlifeCard variant="orange" disabled>
            <h4 className="text-xl font-bold text-catlife-text-primary">Disabled Orange</h4>
            <p className="text-catlife-text-secondary">
              This orange card is also disabled, maintaining the variant styling.
            </p>
            <CatlifeButton variant="dark" size="sm" disabled>
              Disabled Action
            </CatlifeButton>
          </CatlifeCard>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Interactive Example</h3>

        <CatlifeCard className="max-w-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-catlife-primary rounded-full flex items-center justify-center">
              <span className="text-catlife-text-primary font-bold">🐱</span>
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-catlife-text-primary">Cat Profile</h4>
              <p className="text-sm text-catlife-text-secondary">Fluffy orange tabby</p>
            </div>
          </div>
          <div className="flex gap-2">
            <CatlifeButton variant="cta" size="sm" className="flex-1">
              Adopt
            </CatlifeButton>
            <CatlifeButton variant="primary" size="sm" className="flex-1">
              Learn More
            </CatlifeButton>
          </div>
        </CatlifeCard>
      </div>
    </div>
  );
}
