"use client";
import createEmotionCache from "@/utils/theme/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import {
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import React, { ReactNode, createContext, useMemo, useState } from "react";

export const ThemeContext = createContext({
  theme: "dark",
  setTheme: () => {},
});

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
  },
});

// const cache = createEmotionCache();

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<PaletteMode>("dark");
  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  console.log(mode);

  const value = useMemo(
    () => ({
      theme: mode,
      setTheme: () => {
        setMode((pre) => (pre === "dark" ? "light" : "dark"));
      },
    }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={value}>
      {/* <CacheProvider value={cache}> */}
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      {/* <CssBaseline /> */}
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
      {/* </CacheProvider> */}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
