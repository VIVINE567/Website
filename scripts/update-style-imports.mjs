import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

// Map: relative file path → style module name
const MAP = {
  'src/components/sections/HeroSection.jsx':                            'hero',
  'src/components/sections/AboutSection.jsx':                           'about',
  'src/components/sections/ExpertiseSection.jsx':                       'about',
  'src/components/sections/FeatureCardsSection.jsx':                    'featureCards',
  'src/components/sections/ProductsSection.jsx':                        'products',
  'src/components/sections/ApplicationsShowcaseSection.jsx':            'products',
  'src/components/sections/CertificationsSection.jsx':                  'products',
  'src/components/sections/ApplicationsSection.jsx':                    'applications',
  'src/components/sections/CtaSection.jsx':                             'cta',
  'src/components/InquirySection.jsx':                                  'inquiry',
  'src/components/Footer.jsx':                                          'footer',
  'src/components/Preloader.jsx':                                       'preloader',
  'src/components/PreLoader_1.jsx':                                     'preloader',
  'src/components/NavLink.jsx':                                         'nav',
  'src/components/DefaultPage.jsx':                                     'defaultPage',
  'src/components/ProductSidebar.jsx':                                  'products',
  'src/components/sections/products/ProductsHeroSection.jsx':           'products',
  'src/components/sections/products/ProductsCategorySection.jsx':       'products',
  'src/components/sections/products/ProductsIntroSection.jsx':          'products',
  'src/components/sections/applications/ApplicationsPortfolioStrip.jsx':'shared',
  'src/components/sections/about/AboutValuesSection.jsx':               'shared',
  'src/components/sections/services/ServicesListSection.jsx':           'shared',
  'src/components/sections/services/ServicesWhySection.jsx':            'shared',
  'src/components/sections/services/ServicesIndustriesSection.jsx':     'shared',
  'src/components/sections/services/ServicesProductFocusSection.jsx':   'modal',
  'src/components/sections/services/ServicesIntroSection.jsx':          'modal',
  'src/views/Products.jsx':                                             'products',
  'src/views/ProductDetail.jsx':                                        'products',
  'src/views/ProductDetailRich.jsx':                                    'products',
  // AppShell and App.jsx use nav styles
  'app/AppShell.jsx':                                                    'nav',
  'src/App.jsx':                                                        'nav',
};

for (const [relPath, styleModule] of Object.entries(MAP)) {
  const filePath = path.join(root, relPath);
  if (!fs.existsSync(filePath)) {
    console.log(`  skip (not found): ${relPath}`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Compute relative path from the file's directory to src/styles/
  const fileDir = path.dirname(filePath);
  const stylesDir = path.join(root, 'src', 'styles');
  let rel = path.relative(fileDir, stylesDir);
  // Ensure forward slashes
  rel = rel.replace(/\\/g, '/');
  const newImport = `import S from '${rel}/${styleModule}'`;

  // Replace any existing S import
  const updated = content.replace(
    /import S from ['"][^'"]*['"]/,
    newImport
  );

  if (updated === content) {
    console.log(`  skip (no S import found): ${relPath}`);
    continue;
  }

  fs.writeFileSync(filePath, updated);
  console.log(`  ✓ ${relPath} → ${rel}/${styleModule}`);
}

console.log('\nDone.');
