import { DEFAULT_THEME, MantineThemeOverride, createTheme, mergeMantineTheme } from "@mantine/core";

export enum THEME_COLORS {
  BRAND = "#673AB7",
  PRIMARY = "#1976D2",
  SECONDARY = "#616161",
  SUCCESS = "#009688",
  ERROR = "#C62828",
  ALERT = "#FFAB00",
  INFO = "#00BCD4",
  ACCENT = "#EC407A",
  MUTE = "#CFD8DC",
}

const colorsList = Object.values(THEME_COLORS) as Array<string>;

const themeOverride: MantineThemeOverride = createTheme({
  fontFamily: "Roboto, sans-serif",
  primaryColor: "brand",
  primaryShade: 1,
  colors: {
    // @ts-ignore
    brand: colorsList,
  },
  components: {
    Button: {
      styles: {
        root: {
          "&:hover": {
          },
        },
      },
    },
  },
});

export const appTheme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
