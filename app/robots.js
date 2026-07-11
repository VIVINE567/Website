export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'https://www.vivineinternational.com/sitemap.xml',
    host: 'https://www.vivineinternational.com',
  };
}
