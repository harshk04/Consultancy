export const THEME_STORAGE_KEY = "siteThemeV1";

export type ThemeConfig = {
  brandBlue1: string;
  brandBlue2: string;
  brandGold1: string;
  brandGold2: string;
  gradientAngle: number;
  bg: string;
  panel: string;
  fg: string;
  muted: string;
  border: string;
  shadow: string;
  radiusCard: number;
  noiseEnabled: boolean;
};

export const defaultTheme: ThemeConfig = {
  brandBlue1: "#182063",
  brandBlue2: "#2f3cbc",
  brandGold1: "#e1ca9f",
  brandGold2: "#d2ae74",
  gradientAngle: 90,
  bg: "#ffffff",
  panel: "#ffffff",
  fg: "#0b0d13",
  muted: "#4b5563",
  border: "rgba(15, 23, 42, 0.18)",
  shadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
  radiusCard: 28,
  noiseEnabled: true,
};

export function themeToCssVars(theme: ThemeConfig) {
  return {
    "--brand-blue-1": theme.brandBlue1,
    "--brand-blue-2": theme.brandBlue2,
    "--brand-blue": theme.brandBlue1,

    "--brand-gold-1": theme.brandGold1,
    "--brand-gold-2": theme.brandGold2,
    "--brand-gold": theme.brandGold1,

    "--gradient-angle": `${theme.gradientAngle}deg`,
    "--gradient-blue": "linear-gradient(var(--gradient-angle), var(--brand-blue-1), var(--brand-blue-2))",
    "--gradient-gold": "linear-gradient(var(--gradient-angle), var(--brand-gold-1), var(--brand-gold-2))",
    "--gradient-gold-soft":
      "linear-gradient(120deg, color-mix(in oklab, var(--brand-gold-1) 55%, white), color-mix(in oklab, var(--brand-gold-2) 24%, white), white)",

    "--bg": theme.bg,
    "--panel": theme.panel,
    "--fg": theme.fg,
    "--muted": theme.muted,
    "--border": theme.border,
    "--shadow": theme.shadow,
    "--radius-card": `${theme.radiusCard}px`,
    "--radius-pill": "999px",

    "--noise-opacity": theme.noiseEnabled ? "0.055" : "0",
  } as const;
}

export function applyThemeToElement(theme: ThemeConfig, el: HTMLElement) {
  const vars = themeToCssVars(theme);
  for (const [key, value] of Object.entries(vars)) {
    el.style.setProperty(key, value);
  }
}

export function applyThemeToRoot(theme: ThemeConfig) {
  if (typeof document === "undefined") return;
  applyThemeToElement(theme, document.documentElement);
}

function safeParseTheme(json: string | null): Partial<ThemeConfig> | null {
  if (!json) return null;
  try {
    return JSON.parse(json) as Partial<ThemeConfig>;
  } catch {
    return null;
  }
}

export function loadTheme(): ThemeConfig {
  if (typeof window === "undefined") return defaultTheme;
  const parsed = safeParseTheme(window.localStorage.getItem(THEME_STORAGE_KEY));
  if (!parsed) return defaultTheme;
  return { ...defaultTheme, ...parsed };
}

export function saveTheme(theme: ThemeConfig) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(theme));
}
