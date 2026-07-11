import Contact from '../../src/views/Contact';
import { buildMetadata } from '../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Contact Us',
  description: 'Reach out for product enquiries, technical support, samples, and custom formulation solutions.',
  path: '/contact',
});

export default function ContactPage() {
  return <Contact />;
}
