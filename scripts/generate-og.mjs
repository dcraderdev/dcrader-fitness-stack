import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(__dirname, '..', 'public', 'og-image.png');

// Brand palette (from src/styles/global.css)
const BONE = '#f5f4f0';
const GRAPHITE = '#1a1a1a';
const RED = '#c5121d';
const REBAR_SOFT = '#b8b7b1';
const REBAR_DIM = '#9a9994';

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="${REBAR_DIM}" stroke-opacity="0.08" stroke-width="1"/>
    </pattern>
  </defs>

  <!-- background -->
  <rect width="1200" height="630" fill="${GRAPHITE}"/>
  <rect width="1200" height="630" fill="url(#grid)"/>

  <!-- red accent block top-left -->
  <rect x="0" y="0" width="120" height="16" fill="${RED}"/>
  <rect x="0" y="0" width="16" height="120" fill="${RED}"/>

  <!-- red accent block bottom-right -->
  <rect x="1080" y="614" width="120" height="16" fill="${RED}"/>
  <rect x="1184" y="510" width="16" height="120" fill="${RED}"/>

  <!-- tag label -->
  <text x="80" y="170"
    font-family="'Inter','Helvetica Neue',Helvetica,Arial,sans-serif"
    font-size="22" font-weight="600" letter-spacing="6"
    fill="${REBAR_SOFT}">WORKOUT LOG</text>

  <!-- title -->
  <text x="80" y="320"
    font-family="'Oswald','Impact','Arial Black',sans-serif"
    font-size="180" font-weight="700" letter-spacing="-2"
    fill="${BONE}">STACK<tspan fill="${RED}">.</tspan></text>

  <!-- divider -->
  <rect x="80" y="360" width="80" height="6" fill="${RED}"/>

  <!-- subtitle -->
  <text x="80" y="440"
    font-family="'Inter','Helvetica Neue',Helvetica,Arial,sans-serif"
    font-size="36" font-weight="500"
    fill="${BONE}">Strength training log &#8212; sets, reps, progressions.</text>

  <text x="80" y="490"
    font-family="'Inter','Helvetica Neue',Helvetica,Arial,sans-serif"
    font-size="26" font-weight="400"
    fill="${REBAR_SOFT}">Log the work. Watch the numbers go up.</text>

  <!-- corner attribution -->
  <text x="80" y="580"
    font-family="'JetBrains Mono','Menlo','Courier New',monospace"
    font-size="20" font-weight="500" letter-spacing="2"
    fill="${REBAR_DIM}">dcrader.dev</text>
</svg>`;

await sharp(Buffer.from(svg))
  .png()
  .toFile(outPath);

console.log(`wrote ${outPath}`);
