import path from "node:path";

export default function parseFilename(url: string): string {
  return path
    .basename(url)
    .split(".")[0]
    .replaceAll("-", " ")
    .replace(/^\w/, (c) => c.toUpperCase());
}
