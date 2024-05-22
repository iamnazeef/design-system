import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from 'react';
const ThemeContext = createContext({
    theme: {},
    themeMode: 'LIGHT',
});
export function useTheme() {
    return useContext(ThemeContext);
}
export function ThemeProvider({ children, theme, themeMode, }) {
    return (_jsx(ThemeContext.Provider, { value: { theme, themeMode }, children: children }));
}
