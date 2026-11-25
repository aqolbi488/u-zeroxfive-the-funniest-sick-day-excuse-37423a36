import { writeFileSync } from "node:fs";

const entry =
  "Sorry, can't make it in today — my building's lift broke down with me inside it, and maintenance says the rescue window is 'sometime before lunch, probably'.";

const outputPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
writeFileSync(outputPath, entry, "utf8");
