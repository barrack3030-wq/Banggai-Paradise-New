/** Build a GitHub Pages-safe URL for files stored in /public. */
export const assetUrl = (path: string): string => {
  const cleanPath = path.replace(/^\\/+/, '');
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};
