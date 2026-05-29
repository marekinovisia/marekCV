import { writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const sharpUrl = pathToFileURL(
  join(root, "node_modules/.pnpm/sharp@0.34.5/node_modules/sharp/lib/index.js"),
).href;
const { default: sharp } = await import(sharpUrl);
const src = process.argv[2];
if (!src) throw new Error("usage: node gen-icons.mjs <source-image>");

// Modern PNG icons (Next.js App Router file-based metadata)
await sharp(src).resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 1 } })
  .png().toFile(join(root, "src/app/icon.png"));

await sharp(src).resize(180, 180, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 1 } })
  .png().toFile(join(root, "src/app/apple-icon.png"));

// favicon.ico: ICO container wrapping a 48x48 PNG (supported by all modern browsers)
const size = 48;
const png = await sharp(src)
  .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 1 } })
  .ensureAlpha() // Next.js ICO decoder requires the embedded PNG to be RGBA
  .png({ palette: false, compressionLevel: 9 })
  .toBuffer();

const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type = icon
header.writeUInt16LE(1, 4); // count

const entry = Buffer.alloc(16);
entry.writeUInt8(size === 256 ? 0 : size, 0); // width
entry.writeUInt8(size === 256 ? 0 : size, 1); // height
entry.writeUInt8(0, 2);  // palette count
entry.writeUInt8(0, 3);  // reserved
entry.writeUInt16LE(1, 4);  // color planes
entry.writeUInt16LE(32, 6); // bits per pixel
entry.writeUInt32LE(png.length, 8); // size of image data
entry.writeUInt32LE(6 + 16, 12);     // offset of image data

const ico = Buffer.concat([header, entry, png]);
await writeFile(join(root, "src/app/favicon.ico"), ico);

console.log("Generated: src/app/icon.png (512), src/app/apple-icon.png (180), src/app/favicon.ico (48)");
