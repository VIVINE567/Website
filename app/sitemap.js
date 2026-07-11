const BASE_URL = 'https://www.vivineinternational.com';

// Kept in sync with the product slugs under `productDetails` in src/content.tsx
const PRODUCT_SLUGS = [
  'carrageenan',
  'sodium-alginate',
  'propylene-glycol-alginate',
  'pectin',
  'xanthan-gum',
  'guar-gum',
  'gellan-gum',
  'konjac-gum',
  'hpmc',
  'hec',
  'mhec',
  'sodium-cmc',
  'polyanionic-cellulose',
  'croscarmellose-sodium',
  'locust-bean-gum',
];

export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    { route: '', priority: 1.0, changeFrequency: 'weekly' },
    { route: '/about', priority: 0.7, changeFrequency: 'monthly' },
    { route: '/products', priority: 0.9, changeFrequency: 'weekly' },
    { route: '/applications', priority: 0.8, changeFrequency: 'monthly' },
    { route: '/services', priority: 0.7, changeFrequency: 'monthly' },
    { route: '/premix', priority: 0.7, changeFrequency: 'monthly' },
    { route: '/contact', priority: 0.6, changeFrequency: 'yearly' },
  ].map(({ route, priority, changeFrequency }) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const productRoutes = PRODUCT_SLUGS.map((slug) => ({
    url: `${BASE_URL}/products/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...productRoutes];
}
