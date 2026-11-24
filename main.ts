import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Save failed: the database crashed mid-write and took your last hour with it. There is no backup. It sends its regards.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error("entry line violates the 1-200 char single-line gate");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
