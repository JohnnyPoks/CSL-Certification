import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { Moon, Sun, RotateCcw } from "lucide-react";

export default function ThemeSwitcher() {
  const { isDark, toggleTheme, restoreDefaultTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
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
      <Button
        variant="ghost"
        size="icon"
        onClick={restoreDefaultTheme}
        className="rounded-full"
      >
        <RotateCcw className="h-5 w-5" />
      </Button>
    </div>
  );
} 