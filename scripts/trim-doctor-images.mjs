import sharp from "sharp";
import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

const files = ["doctor_left.png", "doctor_right.png"];

for (const name of files) {
  const input = join(publicDir, name);
  const temp = join(publicDir, name.replace(".png", "_trimmed.png"));
  await sharp(input)
    .trim({ threshold: 10 })
    .toFile(temp);
  await sharp(temp).toFile(input);
  const { unlink } = await import("fs/promises");
  await unlink(temp);
  console.log("Trimmed:", name);
}

console.log("Done.");
