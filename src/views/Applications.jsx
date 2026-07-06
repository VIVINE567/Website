import ApplicationsHeroSection from '../components/sections/applications/ApplicationsHeroSection';
import ApplicationsStatsBar from '../components/sections/applications/ApplicationsStatsBar';
import ApplicationsPortfolioStrip from '../components/sections/applications/ApplicationsPortfolioStrip';
import ApplicationsIndustrySections from '../components/sections/applications/ApplicationsIndustrySections';
import ApplicationsCtaSection from '../components/sections/applications/ApplicationsCtaSection';

const Applications = () => (
  <>
    {/* Hero — dark forest, eyebrow, H1, product pills, 2 CTA buttons */}
    <ApplicationsHeroSection />

    {/* Stats bar — 5 horizontal stats (40+, 200+, 15+, ISO, 24hr) */}
    <ApplicationsStatsBar />

    {/* Portfolio strip — "Our Portfolio" label + 16 product chips */}
    <ApplicationsPortfolioStrip />

    {/* All 6 industry sections — Food, Pharma, Cosmetics, Industrial, Animal Nitrition, Biotech */}
    <ApplicationsIndustrySections />

    {/* CTA — 4 capability cards + 2 action buttons */}
    <ApplicationsCtaSection />
  </>
);

export default Applications;
