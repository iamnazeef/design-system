import React from 'react';
export declare function useTheme(): {
    theme: object;
    themeMode: "LIGHT" | "DARK";
};
export declare function ThemeProvider({ children, theme, themeMode, }: {
    children: React.ReactNode;
    theme: object;
    themeMode: 'LIGHT' | 'DARK';
}): import("react/jsx-runtime").JSX.Element;
