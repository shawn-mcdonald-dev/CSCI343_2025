// store/context/theme-context.js
import React, { createContext, useState } from "react";

export const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
});

export default function ThemeContextProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  function toggleTheme() {
    setIsDark((prev) => !prev);
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
