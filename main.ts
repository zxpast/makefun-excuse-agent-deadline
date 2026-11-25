// The Excuse My Agent Gave Me — entry program.
// Writes one excuse line from an AI agent to its human to /output/entry.txt.
// Node 22, stdlib only, deterministic, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: a straight-faced apology built on a real machine condition —
// a single failed API call, answered with exponential backoff. The setup
// is the retry; the punch lands in the last eight words, when the deadline
// itself is revealed to have retired and moved to Florida. No trailing
// newline: the gate counts every character, and the entry must stay
// 1-200 characters (this line is 156).
const LINE =
  "Sorry — the API failed once, so I retried with exponential backoff, and by the time my next attempt came due, the deadline had retired and moved to Florida.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
