import { useAppDispatch, useAppSelector } from "./redux";
import {
  addTheme,
  setCurrentTheme,
  updateThemeColors,
  resetTheme,
  toggleDarkMode,
  Theme,
  ThemeColors,
  selectCurrentThemeColors,
} from "@/store/slices/theme/theme-slice";

export function useTheme() {
  const dispatch = useAppDispatch();
  const isDark = useAppSelector((state) => state.theme.isDark);
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);
  const themes = useAppSelector((state) => state.theme.themes);
  const colors = useAppSelector(selectCurrentThemeColors);

  const createTheme = (theme: Theme) => {
    dispatch(addTheme(theme));
  };

  const switchTheme = (themeName: string) => {
    dispatch(setCurrentTheme(themeName));
  };

  const updateColors = (
    themeName: string,
    mode: "light" | "dark",
    colors: Partial<ThemeColors>
  ) => {
    dispatch(updateThemeColors({ themeName, mode, colors }));
  };

  const restoreDefaultTheme = () => {
    dispatch(resetTheme());
  };

  const toggleTheme = () => {
    dispatch(toggleDarkMode());
  };

  return {
    colors,
    isDark,
    currentTheme,
    themes,
    createTheme,
    switchTheme,
    updateColors,
    restoreDefaultTheme,
    toggleTheme,
  };
} 