import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ThemeColors {
  primary: string;
  secondary: string;
}

export interface Theme {
  name: string;
  light: ThemeColors;
  dark: ThemeColors;
}

interface ThemeState {
  currentTheme: string;
  themes: Record<string, Theme>;
  isDark: boolean;
}

const defaultTheme: Theme = {
  name: "default",
  light: {
    primary: "hsla(132, 59%, 26%, 1)", // green-pea
    secondary: "hsl(36, 98%, 48%)", // chelsea-gem
  },
  dark: {
    primary: "hsla(132, 59%, 30%, 1)", // darker green-pea
    secondary: "hsl(36, 98%, 52%)", // lighter chelsea-gem
  },
};

const initialState: ThemeState = {
  currentTheme: "default",
  themes: {
    default: defaultTheme,
  },
  isDark: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    addTheme: (state, action: PayloadAction<Theme>) => {
      state.themes[action.payload.name] = action.payload;
    },
    setCurrentTheme: (state, action: PayloadAction<string>) => {
      if (state.themes[action.payload]) {
        state.currentTheme = action.payload;
      }
    },
    updateThemeColors: (
      state,
      action: PayloadAction<{
        themeName: string;
        mode: "light" | "dark";
        colors: Partial<ThemeColors>;
      }>
    ) => {
      const { themeName, mode, colors } = action.payload;
      if (state.themes[themeName]) {
        state.themes[themeName][mode] = {
          ...state.themes[themeName][mode],
          ...colors,
        };
      }
    },
    resetTheme: (state) => {
      state.currentTheme = "default";
      state.themes = { default: defaultTheme };
    },
    toggleDarkMode: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

export const {
  addTheme,
  setCurrentTheme,
  updateThemeColors,
  resetTheme,
  toggleDarkMode,
} = themeSlice.actions;

// Selectors
export const selectCurrentThemeColors = (state: { theme: ThemeState }) => {
  const currentTheme = state.theme.themes[state.theme.currentTheme];
  return state.theme.isDark ? currentTheme.dark : currentTheme.light;
};

export default themeSlice.reducer; 