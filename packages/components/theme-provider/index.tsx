import React, { createContext, useContext } from 'react';

const ThemeContext = createContext<{
  theme: object;
  themeMode: 'LIGHT' | 'DARK';
}>({
  theme: {},
  themeMode: 'LIGHT',
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({
  children,
  theme,
  themeMode,
}: {
  children: React.ReactNode;
  theme: object;
  themeMode: 'LIGHT' | 'DARK';
}) {
  return (
    <ThemeContext.Provider value={{ theme, themeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
