"use client";

import { Carousel } from "@/components/ui/catlife-carousel";
import { CatlifeCard } from "@/components/ui/catlife-card";
import { CatlifeButton } from "@/components/ui/catlife-button";

export function CatlifeCarouselComponent() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Catlife Carousel</h3>
        <p className="text-catlife-text-secondary">
          Interactive carousel with Catlife cards. Click on cards or dots to navigate.
        </p>

        <Carousel
          defaultIndex={0}
          onSlideChange={(index) => console.log('Slide changed to:', index)}
          className="bg-catlife-background/50 rounded-3xl p-4"
        >
          <CatlifeCard className="w-80">
            <div className="text-center">
              <div className="w-16 h-16 bg-catlife-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🐱</span>
              </div>
              <h4 className="text-xl font-bold text-catlife-text-primary mb-2">Whiskers</h4>
              <p className="text-catlife-text-secondary mb-4">
                A playful orange tabby who loves to chase laser pointers and nap in sunny spots.
              </p>
              <CatlifeButton variant="cta" size="sm">
                Adopt Whiskers
              </CatlifeButton>
            </div>
          </CatlifeCard>

          <CatlifeCard variant="orange" className="w-80">
            <div className="text-center">
              <div className="w-16 h-16 bg-catlife-surface rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🐈</span>
              </div>
              <h4 className="text-xl font-bold text-catlife-text-primary mb-2">Shadow</h4>
              <p className="text-catlife-text-secondary mb-4">
                A mysterious black cat with bright green eyes. Very affectionate once you earn their trust.
              </p>
              <CatlifeButton variant="dark" size="sm">
                Adopt Shadow
              </CatlifeButton>
            </div>
          </CatlifeCard>

          <CatlifeCard className="w-80">
            <div className="text-center">
              <div className="w-16 h-16 bg-catlife-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🐾</span>
              </div>
              <h4 className="text-xl font-bold text-catlife-text-primary mb-2">Luna</h4>
              <p className="text-catlife-text-secondary mb-4">
                A gentle calico with a sweet personality. Perfect for families with children.
              </p>
              <CatlifeButton variant="primary" size="sm">
                Adopt Luna
              </CatlifeButton>
            </div>
          </CatlifeCard>

          <CatlifeCard variant="orange" className="w-80">
            <div className="text-center">
              <div className="w-16 h-16 bg-catlife-surface rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">😸</span>
              </div>
              <h4 className="text-xl font-bold text-catlife-text-primary mb-2">Milo</h4>
              <p className="text-catlife-text-secondary mb-4">
                An energetic kitten who loves to play and explore. Always ready for an adventure!
              </p>
              <CatlifeButton variant="cta" size="sm">
                Adopt Milo
              </CatlifeButton>
            </div>
          </CatlifeCard>
        </Carousel>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-catlife-background rounded-2xl border border-catlife-border">
            <h4 className="font-semibold text-catlife-text-primary mb-2">Interactive Navigation</h4>
            <p className="text-sm text-catlife-text-secondary">
              Click on cards or pagination dots to navigate between slides.
            </p>
          </div>
          <div className="p-4 bg-catlife-background rounded-2xl border border-catlife-border">
            <h4 className="font-semibold text-catlife-text-primary mb-2">Smooth Animations</h4>
            <p className="text-sm text-catlife-text-secondary">
              Smooth scaling and transition effects for a polished user experience.
            </p>
          </div>
          <div className="p-4 bg-catlife-background rounded-2xl border border-catlife-border">
            <h4 className="font-semibold text-catlife-text-primary mb-2">Accessible</h4>
            <p className="text-sm text-catlife-text-secondary">
              Built with accessibility in mind, including proper ARIA labels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
