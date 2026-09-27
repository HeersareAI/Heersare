import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import path from "node:path";

// Package Next.js's static export using the Sites static-asset archive contract.
const root = process.cwd();
const stage = path.join(root, "dist");
const hosting = JSON.parse(await readFile(path.join(root, ".openai/hosting.json"), "utf8"));
await mkdir(path.join(stage, ".openai"), { recursive: true });
await cp(path.join(root, "out"), path.join(stage, "public"), { recursive: true });
await writeFile(path.join(stage, ".openai/hosting.json"), JSON.stringify({ ...hosting, static: { directory: "public" } }, null, 2));
execFileSync("tar", ["-czf", path.join(stage, "site.tar.gz"), "-C", stage, ".openai", "public"]);
console.log("Packaged dist/site.tar.gz");
