import * as React from "react";
import * as ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@/utils/theme/createEmotionCache";
import theme from "@/utils/theme/theme";
import Home from "./page";

const cache = createEmotionCache();

function Main() {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </CacheProvider>
  );
}

ReactDOM.hydrate(<Main /> as any, document.querySelector('#root'));
