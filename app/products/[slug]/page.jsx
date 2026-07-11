import ProductDetail from '../../../src/views/ProductDetail';
import { CONTENT } from '../../../src/content';
import { buildMetadata, breadcrumbJsonLd } from '../../../src/lib/seo';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = CONTENT.productDetails[slug];

  if (!product) {
    return buildMetadata({
      title: 'Product Not Found',
      description: 'The requested product page could not be found.',
      path: `/products/${slug}`,
      noindex: true,
    });
  }

  const title = product.shortName || product.name;
  const description =
    product.tagline ||
    (Array.isArray(product.description) ? product.description[0] : product.description) ||
    `${product.name} — supplied by VIVINE International.`;

  return buildMetadata({ title, description, path: `/products/${slug}` });
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = CONTENT.productDetails[slug];

  return (
    <>
      {product && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              breadcrumbJsonLd([
                { name: 'Home', path: '/' },
                { name: 'Products', path: '/products' },
                { name: product.shortName || product.name, path: `/products/${slug}` },
              ])
            ),
          }}
        />
      )}
      <ProductDetail />
    </>
  );
}
