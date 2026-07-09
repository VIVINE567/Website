import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import dotenv from 'dotenv';
import sharp from 'sharp';

dotenv.config();

const root = process.cwd();

const productAssets = [
  ['carrageenan', '1585643541-Carrageenan.jpg'],
  ['pectin', '1585644428-Pectin-2020-2.jpg'],
  ['gellan-gum', '1585644863-Gellan-Gum-2020-1.jpg'],
  ['sodium-alginate', '1585645271-Sodium-Alginate-2020-4.jpg'],
  ['xanthan-gum', '1585647314-Xanthan-Gum-2020-4.jpg'],
  ['konjac-gum', '1585647537-Konjac-Gum-new-3.jpg'],
  ['alginic-acid', 'alginic-acid-powder.jpg'],
  ['croscarmellose-sodium', 'CROSCARMELLOSE-SODIUM-INS-468-.jpg'],
  [
    'polyanionic-cellulose',
    'Factory-Price-Industrial-Grade-Poly-Anionic-Cellulose-PAC-LV-Oil-Drilling-Grade-PAC-Polyanionic-Cellulose (1).jpg',
  ],
  ['guar-gum', 'Guar-Gum-powder.jpg'],
  ['hpmc', 'HPMC.jpg'],
  ['hec', 'hydroxyethyl-cellulose-500x500.jpg'],
  ['locust-bean-gum', 'LBG.jpg'],
  ['mhec', 'Methyl-Hydroxyethyl-Cellulose-MHEC-Powder-..jpg'],
  ['propylene-glycol-alginate', 'Propylene-Glycol-Alginate-PGA-4.jpg'],
  ['white-food-grade-sodium-alginate', 'white-food-grade-sodium-alginate-500x500.png'],
].map(([id, fileName]) => ({
  id,
  folder: 'VIVINE_Products_Photos',
  publicId: id,
  filePath: path.join(root, 'VIVINE_Products_Photos', fileName),
}));

const certificateAssets = [
  ['halal-certified', 'WhatsApp Image 2026-07-09 at 11.04.08 AM.jpeg'],
  ['kosher-certified', 'WhatsApp Image 2026-07-09 at 11.29.06 AM.jpeg'],
  ['brc-certified-food', 'WhatsApp Image 2026-07-09 at 11.29.07 AM.jpeg'],
  ['iso-22000-certified', 'WhatsApp Image 2026-07-09 at 11.29.07 AM (1).jpeg'],
  ['iso-9001-certified', 'WhatsApp Image 2026-07-09 at 11.29.07 AM (2).jpeg'],
].map(([id, fileName]) => ({
  id,
  folder: 'certificates',
  publicId: id,
  filePath: path.join(root, 'certificats', fileName),
  trim: true,
}));

const cloudName = process.env.CLOUDINARY_CLOUD_NAME || process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

if (!cloudName || !apiKey || !apiSecret) {
  throw new Error('Missing Cloudinary credentials in .env');
}

const signParams = (params) => {
  const payload = Object.entries(params)
    .filter(([, value]) => value !== undefined && value !== null && value !== '')
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  return crypto.createHash('sha1').update(`${payload}${apiSecret}`).digest('hex');
};

const makeCertificateTransparent = async (source) => {
  const { data, info } = await sharp(source)
    .trim({ background: '#ffffff', threshold: 24 })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const isBackground = (index) => {
    const r = data[index];
    const g = data[index + 1];
    const b = data[index + 2];
    const a = data[index + 3];

    return a > 0 && r > 238 && g > 238 && b > 238;
  };

  const queue = [];
  const enqueue = (x, y) => {
    if (x < 0 || y < 0 || x >= width || y >= height) return;
    const index = (y * width + x) * channels;
    if (!isBackground(index)) return;

    data[index + 3] = 0;
    queue.push([x, y]);
  };

  for (let x = 0; x < width; x += 1) {
    enqueue(x, 0);
    enqueue(x, height - 1);
  }

  for (let y = 1; y < height - 1; y += 1) {
    enqueue(0, y);
    enqueue(width - 1, y);
  }

  for (let cursor = 0; cursor < queue.length; cursor += 1) {
    const [x, y] = queue[cursor];
    enqueue(x + 1, y);
    enqueue(x - 1, y);
    enqueue(x, y + 1);
    enqueue(x, y - 1);
  }

  return sharp(data, { raw: { width, height, channels } })
    .extend({
      top: 20,
      bottom: 20,
      left: 24,
      right: 24,
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .png()
    .toBuffer();
};

const uploadAsset = async (asset) => {
  const source = await fs.readFile(asset.filePath);
  const file = asset.trim ? await makeCertificateTransparent(source) : source;
  const timestamp = Math.floor(Date.now() / 1000);
  const params = {
    folder: asset.folder,
    overwrite: 'true',
    public_id: asset.publicId,
    timestamp,
  };

  const form = new FormData();
  form.set('api_key', apiKey);
  form.set('folder', params.folder);
  form.set('overwrite', params.overwrite);
  form.set('public_id', params.public_id);
  form.set('timestamp', String(timestamp));
  form.set('signature', signParams(params));
  form.set('file', new Blob([file]), asset.trim ? `${asset.publicId}.png` : path.basename(asset.filePath));

  const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
    method: 'POST',
    body: form,
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(`${asset.id}: ${result.error?.message || response.statusText}`);
  }

  const optimizedUrl = result.secure_url.replace('/image/upload/', '/image/upload/f_auto,q_auto/');

  return {
    id: asset.id,
    publicId: result.public_id,
    url: optimizedUrl,
  };
};

const uploaded = [];
const assetsToUpload = process.argv.includes('--certificates-only')
  ? certificateAssets
  : [...productAssets, ...certificateAssets];

for (const asset of assetsToUpload) {
  console.log(`Uploading ${asset.id}...`);
  uploaded.push(await uploadAsset(asset));
}

console.log(JSON.stringify(uploaded, null, 2));
