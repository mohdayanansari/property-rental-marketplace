import { ThemeContext } from "@/contexts/theme-context";
import { useContext } from "react";

function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a Theme Context Provider!"
    );
  }
  return context;
}

export default useThemeContext;
