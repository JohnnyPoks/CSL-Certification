import { useEffect } from "react";
import { useAppSelector } from "@/hooks/redux";
import { selectCurrentThemeColors } from "@/store/slices/theme/theme-slice";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const colors = useAppSelector(selectCurrentThemeColors);
  const isDark = useAppSelector((state) => state.theme.isDark);

  useEffect(() => {
    // Update CSS variables
    const root = document.documentElement;
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });

    // Toggle dark mode class
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [colors, isDark]);

  return <>{children}</>;
} 