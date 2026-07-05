import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Moon, Sun, RotateCcw } from "lucide-react";

export default function ThemeSelector() {
  const {
    colors,
    isDark,
    currentTheme,
    themes,
    switchTheme,
    toggleTheme,
    restoreDefaultTheme,
  } = useTheme();

  return (
    <div className="flex items-center gap-4">
      {/* Theme Selector */}
      <Select value={currentTheme} onValueChange={switchTheme}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select theme" />
        </SelectTrigger>
        <SelectContent>
          {Object.values(themes).map((theme) => (
            <SelectItem key={theme.name} value={theme.name}>
              {theme.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Dark Mode Toggle */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="rounded-full"
      >
        {isDark ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </Button>

      {/* Reset Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={restoreDefaultTheme}
        className="rounded-full"
      >
        <RotateCcw className="h-5 w-5" />
      </Button>

      {/* Current Colors Preview */}
      <div className="flex gap-2">
        <div
          className="w-6 h-6 rounded-full border"
          style={{ backgroundColor: colors.primary }}
        />
        <div
          className="w-6 h-6 rounded-full border"
          style={{ backgroundColor: colors.secondary }}
        />
      </div>
    </div>
  );
} 