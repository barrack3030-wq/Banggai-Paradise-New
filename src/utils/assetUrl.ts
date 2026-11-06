/** Build a GitHub Pages-safe URL for files stored in /public. */
export const assetUrl = (path: string): string => {
  if (/^https?:\/\//.test(path)) return path;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};
