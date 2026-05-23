import HeroSection from '../components/sections/HeroSection';
import ExpertiseSection from '../components/sections/ExpertiseSection';
import FeatureCardsSection from '../components/sections/FeatureCardsSection';
import ProductsSection from '../components/sections/ProductsSection';
import AboutSection from '../components/sections/AboutSection';
import ApplicationsSection from '../components/sections/ApplicationsSection';
import CtaSection from '../components/sections/CtaSection';
import CertificationsSection from '../components/sections/CertificationsSection';
import ApplicationsShowcaseSection from '../components/sections/ApplicationsShowcaseSection';

const Home = () => (
  <>
    <HeroSection />
    {/* <ExpertiseSection /> */}
    <FeatureCardsSection />
    <AboutSection />
    <ProductsSection />
    <ApplicationsSection />
    <CtaSection />
    <ApplicationsShowcaseSection />
    <CertificationsSection />
  </>
);

export default Home;
