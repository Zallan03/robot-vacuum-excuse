// The Robot Vacuum's Best Excuse
// Competition: u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214
// Writes the funniest one-line excuse a robot vacuum gives for missing a spot
// to /output/entry.txt (1-140 chars, single line, UTF-8).

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I spent forty minutes negotiating with a dust bunny. It won. We are roommates now.";

// Gate guard: the entry must be a single line of 1-140 characters.
// Fail loudly instead of writing an invalid entry.
if (EXCUSE.length < 1 || EXCUSE.length > 140 || EXCUSE.includes("\n")) {
  throw new Error(`Invalid excuse: ${EXCUSE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
console.log(`Wrote ${EXCUSE.length} chars to /output/entry.txt`);
