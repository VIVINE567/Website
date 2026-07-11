import Services from '../../src/views/Services';
import { buildMetadata } from '../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Services',
  description:
    'End-to-end support across sourcing, technical formulation, logistics and after-sale care — serving food, pharma, cosmetic and industrial sectors worldwide.',
  path: '/services',
});

export default function ServicesPage() {
  return <Services />;
}
