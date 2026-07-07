'use client';

import { useCloudinaryImage } from '../lib/cloudinaryAssets';

export default function CloudinaryImage({ src, alt = '', ...props }) {
  const resolvedSrc = useCloudinaryImage(src);

  if (!src) return null;

  return (
    <img
      src={resolvedSrc || src}
      alt={alt}
      referrerPolicy="no-referrer"
      {...props}
    />
  );







}
