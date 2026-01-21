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
  heroBlobOpacity: number;
  heroBlobTintBlue: string;
  heroBlobTintGold: string;
  heroNoiseEnabled: boolean;
  heroVignetteStrength: number;
  heroSpecksEnabled: boolean;
  heroSpecksOpacity: number;
  heroBlobCount: 3 | 4 | 5;
  heroMotionStrength: number;
  heroTypewriterEnabled: boolean;
  heroTypewriterTypeSpeedMs: number;
  heroTypewriterDeleteSpeedMs: number;
  heroTypewriterPauseMs: number;
  heroTypewriterPhrasesOverride: string;
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
  shadow: "0 18px 45px rgba(15, 23, 42, 0.08), 0 2px 6px rgba(15, 23, 42, 0.05)",
  radiusCard: 28,
  noiseEnabled: true,
  heroBlobOpacity: 0.16,
  heroBlobTintBlue: "#2f3cbc",
  heroBlobTintGold: "#e1ca9f",
  heroNoiseEnabled: true,
  heroVignetteStrength: 0.14,
  heroSpecksEnabled: true,
  heroSpecksOpacity: 0.1,
  heroBlobCount: 5,
  heroMotionStrength: 1,
  heroTypewriterEnabled: true,
  heroTypewriterTypeSpeedMs: 58,
  heroTypewriterDeleteSpeedMs: 34,
  heroTypewriterPauseMs: 1050,
  heroTypewriterPhrasesOverride: "",
};

export function themeToCssVars(theme: ThemeConfig) {
  const amp = Math.round(theme.heroMotionStrength * 26);
  const ampSm = Math.round(theme.heroMotionStrength * 16);
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

    "--hero-blob-opacity": `${theme.heroBlobOpacity}`,
    "--hero-blob-tint-blue": theme.heroBlobTintBlue,
    "--hero-blob-tint-gold": theme.heroBlobTintGold,
    "--hero-noise-opacity": theme.heroNoiseEnabled ? "0.055" : "0",
    "--hero-vignette-strength": `${theme.heroVignetteStrength}`,
    "--hero-specks-opacity": theme.heroSpecksEnabled ? `${theme.heroSpecksOpacity}` : "0",
    "--hero-motion-strength": `${theme.heroMotionStrength}`,
    "--hero-motion-amp": `${amp}px`,
    "--hero-motion-amp-neg": `${-amp}px`,
    "--hero-motion-amp-sm": `${ampSm}px`,
    "--hero-motion-amp-sm-neg": `${-ampSm}px`,
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
