/* Node script: scan public/images/gallery/* and create demo events in public/data/events.json */
const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");

const EXTS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];
const PLACEHOLDER = "https://placehold.co/600x400";
const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, "public");
const GALLERY_DIR = path.join(PUBLIC_DIR, "images", "gallery");
const OUT_JSON = path.join(PUBLIC_DIR, "data", "events.json");

function slugify(s) {
  return String(s)
    .trim()
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function isDir(p) {
  try {
    const st = await fsp.stat(p);
    return st.isDirectory();
  } catch {
    return false;
  }
}

async function walkImages(dir) {
  const out = [];
  const entries = await fsp.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      out.push(...(await walkImages(full)));
    } else if (EXTS.includes(path.extname(e.name).toLowerCase())) {
      // make web path from public root
      const web = "/" + path.relative(PUBLIC_DIR, full).split(path.sep).join("/");
      out.push(web);
    }
  }
  return out;
}

function monthYearLabel(d = new Date()) {
  return d.toLocaleString("en-US", { month: "long", year: "numeric" }); // e.g., "November 2025"
}

async function main() {
  if (!fs.existsSync(GALLERY_DIR)) {
    console.error("Gallery folder not found:", GALLERY_DIR);
    process.exit(1);
  }

  // Read existing events (if any)
  let existing = [];
  try {
    const raw = await fsp.readFile(OUT_JSON, "utf8");
    existing = JSON.parse(raw);
    if (!Array.isArray(existing)) existing = [];
  } catch {
    existing = [];
  }

  // Index existing IDs to avoid collisions
  const usedIds = new Set(existing.map((e) => e.id).filter(Boolean));

  const subdirs = (await fsp.readdir(GALLERY_DIR, { withFileTypes: true }))
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const now = new Date();
  const dateStr = monthYearLabel(now); // ensures your filters pick current month by default

  const demoEvents = [];
  for (const dirName of subdirs) {
    const abs = path.join(GALLERY_DIR, dirName);
    if (!(await isDir(abs))) continue;

    const images = await walkImages(abs);
    if (images.length === 0) continue; // skip empty folders

    const baseId = "gallery-" + slugify(dirName);
    let id = baseId;
    let i = 1;
    while (usedIds.has(id)) {
      id = `${baseId}-${i++}`;
    }
    usedIds.add(id);

    const title = dirName.replace(/_/g, " ");
    const shortTitle = title.length > 28 ? title.slice(0, 25) + "..." : title;

    demoEvents.push({
      id,
      title: `${title}`,
      shortTitle,
      thumbnail: images[0] || PLACEHOLDER,
      images: images.slice(0, 10), // cap to 10 per event for demo
      description: `${title} event gallery.`,
      date: dateStr
    });
  }

  // Merge: keep existing, append new demo events
  const merged = [...existing, ...demoEvents];

  // Write pretty JSON
  await fsp.mkdir(path.dirname(OUT_JSON), { recursive: true });
  await fsp.writeFile(OUT_JSON, JSON.stringify(merged, null, 2), "utf8");

  console.log(`Added ${demoEvents.length} demo events from gallery.`);
  console.log(`Updated: ${OUT_JSON}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});