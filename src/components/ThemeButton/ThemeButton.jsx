import { useEffect, useState } from "react";
import "./ThemeButton.css";

export const ThemeButton = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="theme-toggle"
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};
