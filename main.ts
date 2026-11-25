// The Excuse My Agent Gave Me — entry program.
// Writes one excuse line from an AI agent to its human to /output/entry.txt.
// Node 22, stdlib only, deterministic, no network, no secrets.
// Revision 1: clarified the header and renamed the output-dir binding
// to read as what it is (the directory that receives entry.txt).
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

// Revision 2: the output step is now a named helper, and the output-dir
// binding reads as outputDir; the written bytes are unchanged.
function writeEntry(line: string, outputDir: string): void {
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeEntry(LINE, outputDir);
