import { useContext, createContext } from "react";

// Create a new context
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})

// Custom Provider component to wrap around components
export const ThemeProvider = ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext)
}