import React, { createContext, useContext, useState } from 'react';

import { black, white } from '../util/theme';

interface Theme {
  backgroundPrimary: string
  backgroundSecondary: string
  backgroundTertiary: string
  backgroundFotterChat: string
  backgroundAside: string
  colorPrimary: string
  colorSecondary: string
  colorTertiary: string
  border: string;
  backgroundInput: string;
  backgroundIndex: string;
  backgroundDrawer: string;
  backgroundHover: string;
}
interface ThemeContextData {
  wallpaper: string;
  changeWallpaper(color: string): void;
  theme: Theme;
  blackTheme: boolean;
  changeTheme(blachTheme: boolean): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider: React.FC = ({ children }) => {

  const [blackTheme, setBlackTheme] = useState(false);
  const [wallpaper, setWallpaper] = useState(blackTheme ? '#222' : '#dfd7d0');


  function changeWallpaper(color: string) {
    setWallpaper(color);
  }

  function changeTheme(black: boolean) {
    if (black) {
      setBlackTheme(true);
    } else {
      setBlackTheme(false);
    }
  }

  return (
    <ThemeContext.Provider value={{ wallpaper, changeWallpaper, theme: blackTheme ? black : white, blackTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}