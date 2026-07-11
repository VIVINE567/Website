import './globals.css';
import AppShell from './AppShell';
import { CONTENT } from '../src/content';

const SITE_URL = 'https://www.vivineinternational.com';
const SITE_DESCRIPTION =
  'VIVINE International provides high-performance hydrocolloid ingredients, food stabilizers, and customized functional blends for food, pharma, cosmetic, and industrial applications.';
const LOGO_URL = 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783142416/thumbnail_rzwvfj.png';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'VIVINE International - Hydrocolloid Solutions',
    template: '%s | VIVINE International',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'hydrocolloid supplier',
    'food stabilizer manufacturer',
    'carrageenan',
    'sodium alginate',
    'xanthan gum',
    'guar gum',
    'pectin',
    'gellan gum',
    'cellulose ethers',
    'VIVINE International',
  ],
  alternates: { canonical: '/' },
  icons: { icon: LOGO_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'VIVINE International',
    title: 'VIVINE International - Hydrocolloid Solutions',
    description: SITE_DESCRIPTION,
    images: [{ url: LOGO_URL }],
  },
  twitter: {
    card: 'summary',
    title: 'VIVINE International - Hydrocolloid Solutions',
    description: SITE_DESCRIPTION,
    images: [LOGO_URL],
  },
};

// Top-level nav entries only (no in-page #anchor links) — signals the site's
// primary navigation structure to search engines for sitelinks eligibility.
const NAV_ITEMS = CONTENT.nav.links.filter((link) => !link.href.includes('#'));

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'VIVINE International',
    url: SITE_URL,
    logo: LOGO_URL,
    description: SITE_DESCRIPTION,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'sales@vivineinternational.com',
      telephone: '+91-9619661133',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'VIVINE International',
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: { '@type': 'Organization', name: 'VIVINE International', logo: LOGO_URL },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    name: NAV_ITEMS.map((l) => l.label),
    url: NAV_ITEMS.map((l) => `${SITE_URL}${l.href}`),
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Cinzel:wght@400;600;700&family=Raleway:wght@300;400;500;600&family=Montserrat:wght@400;500;600;700;800;900&family=Roboto:wght@400;500;700&family=Oswald:wght@400;500;600;700&display=swap"
        />
      </head> */}
      <body>
        {structuredData.map((data, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
