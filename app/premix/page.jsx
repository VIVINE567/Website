import Premix from '../../src/views/Premix';
import { buildMetadata } from '../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Premixes',
  description:
    'Discover our range of premium eggless premixes — waffles, pancakes, cakes, churros, crepes, and more. Every premix is crafted for exceptional taste, consistent results, and effortless preparation.',
  path: '/premix',
});

export default function PremixPage() {
  return <Premix />;
}
