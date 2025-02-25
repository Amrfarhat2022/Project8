import React from "react";
import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          text: {
            primary: "#2B3445",
          },

          mycolor:{
            main :"#F6F9FC",
          },
          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: grey[300],
          },
          bgg: {
            main:"#2E2E2E"
          }
        }
      : {
          // palette values for dark mode

          mycolor:{
            main :"#252b32",
          },

          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: grey[800],
          },
          text: {
            primary: "#fff",
          },
          bgg: {
            main:"#2E2E2E"
          }
        }),
  },
});

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};