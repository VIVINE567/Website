import About from '../../src/views/About';
import { buildMetadata } from '../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'About Us',
  description:
    'VIVINE International is a global supplier of hydrocolloids, alginates and cellulose derivatives — connecting manufacturers in food, pharma, cosmetics and industry with precision-grade ingredients and dedicated technical support.',
  path: '/about',
});

export default function AboutPage() {
  return <About />;
}
