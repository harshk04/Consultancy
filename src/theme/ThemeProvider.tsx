"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ThemeConfig } from "@/theme/theme";
import { applyThemeToRoot, loadTheme, saveTheme } from "@/theme/theme";

type ThemeContextValue = {
  persistedTheme: ThemeConfig;
  setPersistedTheme: (next: ThemeConfig) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [persistedTheme, setPersistedThemeState] = useState<ThemeConfig>(() => loadTheme());

  useEffect(() => {
    applyThemeToRoot(persistedTheme);
  }, [persistedTheme]);

  const setPersistedTheme = useCallback((next: ThemeConfig) => {
    setPersistedThemeState(next);
    saveTheme(next);
    applyThemeToRoot(next);
  }, []);

  const value: ThemeContextValue = useMemo(() => ({ persistedTheme, setPersistedTheme }), [persistedTheme, setPersistedTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
