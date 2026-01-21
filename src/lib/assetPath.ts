function normalizeBasePath(basePath: string) {
  if (!basePath) return "";
  if (basePath === "/") return "";
  if (!basePath.startsWith("/")) basePath = `/${basePath}`;
  return basePath.endsWith("/") ? basePath.slice(0, -1) : basePath;
}

function normalizeAssetPath(asset: string) {
  if (!asset) return "/";
  return asset.startsWith("/") ? asset : `/${asset}`;
}

export function assetPath(asset: string) {
  const basePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH ?? "");
  const normalized = normalizeAssetPath(asset);
  return basePath ? `${basePath}${normalized}` : normalized;
}

