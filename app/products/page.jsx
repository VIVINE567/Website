import Products from '../../src/views/Products';
import { buildMetadata } from '../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Products',
  description:
    'VIVINE International is a trusted hydrocolloid ingredients supplier, offering a comprehensive range of pure hydrocolloids and food stabilizer blends & systems — carrageenan, alginates, pectin, xanthan, guar, cellulose ethers, and more.',
  path: '/products',
});

export default function ProductsPage() {
  return <Products />;
}
