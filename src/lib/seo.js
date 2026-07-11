export const SITE_URL = 'https://www.vivineinternational.com';
export const SITE_NAME = 'VIVINE International';
export const DEFAULT_OG_IMAGE =
  'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783142416/thumbnail_rzwvfj.png';

// Shared helper so every route.jsx (server component wrapper) can export a
// consistent, unique <head> metadata block — title, description, canonical,
// Open Graph, Twitter card — without repeating boilerplate. Purely SEO/head
// data; it never touches what's rendered on the page.
export function buildMetadata({ title, description, path = '/', image = DEFAULT_OG_IMAGE, noindex = false }) {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: typeof title === 'string' ? title : title?.absolute,
      description,
      url,
      siteName: SITE_NAME,
      type: 'website',
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary',
      title: typeof title === 'string' ? title : title?.absolute,
      description,
      images: [image],
    },
  };
}

export function breadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.path ? `${SITE_URL}${item.path}` : undefined,
    })),
  };
}
