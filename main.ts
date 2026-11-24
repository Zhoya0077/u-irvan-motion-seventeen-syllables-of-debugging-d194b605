import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One haiku about debugging, 5-7-5 syllables (17 total).
// Line 1 sets the scene: 3 a.m., a breakpoint hit.
// Line 2 widens it: the log keeps scrolling, nothing fails.
// Line 3 turns it: the only thing failing is my own code.
// Written with no trailing newline, so the file holds exactly
// the three haiku lines (74 characters).
const HAIKU = [
  "Three a.m., breakpoint",
  "the log scrolls on; nothing fails",
  "except my own code",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), HAIKU, "utf8");
