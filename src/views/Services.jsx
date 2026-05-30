import ServicesHeroSection from '../components/sections/services/ServicesHeroSection';
import ServicesIntroSection from '../components/sections/services/ServicesIntroSection';
import ServicesIndustriesSection from '../components/sections/services/ServicesIndustriesSection';
import ServicesListSection from '../components/sections/services/ServicesListSection';
import ServicesProductFocusSection from '../components/sections/services/ServicesProductFocusSection';
import ServicesWhySection from '../components/sections/services/ServicesWhySection';
import ServicesCtaSection from '../components/sections/services/ServicesCtaSection';

const Services = () => (
  <>
    {/* 1. Hero — dark forest theme, molecular ring spin, eyebrow, Cinzel header */}
    <ServicesHeroSection />

    {/* 2. Intro — who we are description + 4 stats cards with animated counters */}
    <ServicesIntroSection />

    {/* 3. Industries served grid — 5 sectors styled beautifully with hover scale */}
    <ServicesIndustriesSection />

    {/* 4. Core Services List — 6 service offering cards with gold accent reveals */}
    <ServicesListSection />

    {/* 5. Product categories focus — 3 segments with top accents and product tags */}
    <ServicesProductFocusSection />

    {/* 6. Why Choose Us (Advantage) — split orbital graphic and list with gold bullets */}
    <ServicesWhySection />

    {/* 7. Action CTA banner — breafing glow, quote modal trigger and emails */}
    <ServicesCtaSection />
  </>
);

export default Services;
