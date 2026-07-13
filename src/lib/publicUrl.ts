/** Resolve a public/ asset path (works on GitHub Pages subpaths). */
export function publicUrl(path: string): string {
  const clean = path.replace(/^\//, "");
  return `${import.meta.env.BASE_URL}${clean}`;
}
