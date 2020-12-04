import React, { createContext, useContext, useState } from 'react';

interface ThemeContextData {
  wallpaper: string;
  changeWallpaper(color: string): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider: React.FC = ({ children }) => {

  const [wallpaper, setWallpaper] = useState('#222');

  function changeWallpaper(color: string) {
    setWallpaper(color);
  }

  return (
    <ThemeContext.Provider value={{ wallpaper, changeWallpaper }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}