import { HeroSection } from "@/components/sections/hero-section";
import { UspSection } from "@/components/sections/usp-section";
import { TasteSection } from "@/components/sections/taste-section";
import { IngredientSection } from "@/components/sections/ingredient-section";
import { CertificationSection } from "@/components/sections/certification-section";
import { ComparisonSection } from "@/components/sections/comparison-section";
import { StorySection } from "@/components/sections/story-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <UspSection />
      <TasteSection />
      <IngredientSection />
      <CertificationSection />
      <ComparisonSection />
      <StorySection />
      <FaqSection />
      <FooterSection />
    </main>
  );
}
