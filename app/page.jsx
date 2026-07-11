import Home from '../src/views/Home';
import { buildMetadata } from '../src/lib/seo';

export const metadata = buildMetadata({
  title: { absolute: 'VIVINE International - Hydrocolloid Solutions' },
  description:
    'VIVINE International provides high-performance hydrocolloid ingredients, food stabilizers, and customized functional blends for food, pharma, cosmetic, and industrial applications.',
  path: '/',
});

export default function HomePage() {
  return <Home />;
}
