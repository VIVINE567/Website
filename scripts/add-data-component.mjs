import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const componentsDir = path.join(__dirname, '../src/components');

// Step 1: strip all existing data-component attributes from every file
function stripDataComponent(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes('data-component=')) return;
  const cleaned = content.replace(/\s*data-component="[^"]*"/g, '');
  fs.writeFileSync(filePath, cleaned);
}

// Step 2: add data-component to the default-exported component's root JSX element
function addDataComponent(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Find the name of the default export
  // e.g. "export default MyComponent" or "export default function MyComponent"
  let exportedName = null;
  const directExport = content.match(/export\s+default\s+(?:function\s+)?([A-Z][A-Za-z0-9]+)/);
  if (directExport) {
    exportedName = directExport[1];
  } else {
    // e.g.  export default SomeName; at the bottom
    const bottomExport = content.match(/export\s+default\s+([A-Z][A-Za-z0-9]+)\s*;/);
    if (bottomExport) exportedName = bottomExport[1];
  }

  if (!exportedName) {
    console.log(`  skip (no default export found): ${path.basename(filePath)}`);
    return;
  }

  // Find where this component is defined and its opening JSX
  // Pattern 1: const Name = () => (\n  <tag   or   const Name = (props) => (\n  <tag
  // Pattern 2: const Name = () => <tag   (single-line arrow)
  // Pattern 3: function Name(...) { ... return (\n  <tag
  // We search for the component definition, then find its first <Tag after => ( or return (

  // Build a regex that finds the definition of the exported component
  // and the first JSX tag it returns
  const defPatterns = [
    // Arrow with parens: const Name = (...) => (  <tag
    { re: new RegExp(`const\\s+${exportedName}\\s*=\\s*(?:\\([^)]*\\)|\\w+)\\s*=>\\s*\\(\\s*\\n?\\s*<`), needsReturn: false },
    // Arrow direct: const Name = (...) => <tag
    { re: new RegExp(`const\\s+${exportedName}\\s*=\\s*(?:\\([^)]*\\)|\\w+)\\s*=>\\s*<`), needsReturn: false },
    // Arrow with body: const Name = (...) => { ... return (
    { re: new RegExp(`const\\s+${exportedName}\\s*=\\s*(?:\\([^)]*\\)|\\w+)\\s*=>\\s*\\{`), needsReturn: true },
    // Function declaration: function Name(...) { ... return (
    { re: new RegExp(`function\\s+${exportedName}\\s*\\([^)]*\\)`), needsReturn: true },
  ];

  let defIdx = -1;
  let needsReturn = false;
  for (const { re, needsReturn: nr } of defPatterns) {
    const idx = content.search(re);
    if (idx !== -1) {
      defIdx = idx;
      needsReturn = nr;
      break;
    }
  }

  if (defIdx === -1) {
    console.log(`  skip (definition not found for ${exportedName}): ${path.basename(filePath)}`);
    return;
  }

  let tagStart;
  if (needsReturn) {
    // Find "return (" after the component definition
    const afterDef = content.slice(defIdx);
    const retMatch = afterDef.search(/\breturn\s*[\s\S]*?<[A-Za-z]/);
    if (retMatch === -1) {
      console.log(`  skip (no return in ${exportedName}): ${path.basename(filePath)}`);
      return;
    }
    tagStart = content.indexOf('<', defIdx + retMatch);
  } else {
    // Arrow function — find the < that's part of the match
    tagStart = content.indexOf('<', defIdx + `const ${exportedName}`.length);
  }

  if (tagStart === -1) return;

  // Get the tag name
  const tagMatch = content.slice(tagStart).match(/^<([A-Za-z][A-Za-z0-9.]*)/);
  if (!tagMatch) return;

  const tagName = tagMatch[1];

  // Inject data-component right after the tag name
  const insertPos = tagStart + 1 + tagName.length;
  const newContent =
    content.slice(0, insertPos) +
    ` data-component="${exportedName}"` +
    content.slice(insertPos);

  fs.writeFileSync(filePath, newContent);
  console.log(`  ✓ ${exportedName} → <${tagName}> in ${path.relative(process.cwd(), filePath)}`);
}

function walk(dir, fn) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, fn);
    else if (entry.name.endsWith('.jsx')) fn(full);
  }
}

console.log('Step 1: Stripping old data-component attributes...');
walk(componentsDir, stripDataComponent);

console.log('\nStep 2: Adding data-component to default-exported root elements...\n');
walk(componentsDir, addDataComponent);

console.log('\nDone.');
