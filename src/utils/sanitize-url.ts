export function sanitizeUrl(url: string | undefined) {
  return url !== undefined ? url : "";
}