'use client';

import Link from 'next/link';
import S from '../styles';
import { CONTENT } from '../content';

const ALL_PRODUCTS = Object.entries(CONTENT.productDetails).map(([slug, p]) => ({
  slug,
  name: p.name,
}));

const ProductSidebar = ({ currentSlug }) => (
  <aside data-component="ProductSidebar" className="hidden lg:block relative">
    <div className="sticky top-[100px]">
      <h3
        className="text-xs uppercase mb-5 tracking-[0.18em]"
        style={{ fontFamily: "'Raleway', sans-serif", color: "var(--gold-dark)", fontWeight: 700 }}
      >
        Products
      </h3>
      <nav className="flex flex-col gap-0.5" style={S.sidebarNav}>
        {ALL_PRODUCTS.map(({ slug, name }) => {
          const active = slug === currentSlug;
          return (
            <Link
              key={slug}
              href={`/products/${slug}`}
              className="block px-4 py-2.5 rounded-lg transition-all"
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "0.82rem",
                letterSpacing: "0.04em",
                fontWeight: active ? 700 : 500,
                color: active ? "var(--forest)" : "var(--brown-warm)",
                background: active ? "rgba(201,168,76,0.1)" : "transparent",
                borderLeft: active ? "3px solid var(--gold)" : "3px solid transparent",
              }}
            >
              {name}
            </Link>
          );
        })}
      </nav>
    </div>
  </aside>
);

export default ProductSidebar;
