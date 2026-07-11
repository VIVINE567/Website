import Applications from '../../src/views/Applications';
import { buildMetadata } from '../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Applications',
  description:
    'From food stabilisation and pharma excipients to personal care actives and industrial binders — precision-grade functional ingredients trusted by manufacturers in over 40 countries.',
  path: '/applications',
});

export default function ApplicationsPage() {
  return <Applications />;
}
