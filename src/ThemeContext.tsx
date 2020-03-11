import React, { ReactElement, useState } from "react";
import { ThemeProvider } from "styled-components";

interface Props {
  children: ReactElement;
}
const ThemeToggleContext = React.createContext({
  toggle: () => {}
});
export const useTheme = () => React.useContext(ThemeToggleContext);

export const MyThemeProvider = ({ children }: Props) => {
  const toggle = () => {
    const mode = themeState.mode === "light" ? `dark` : `light`;
    setThemeState({ mode: mode });
    localStorage.setItem("mode", mode);
  };
  const [themeState, setThemeState] = useState({
    mode: "light"
  });
  return (
    <ThemeToggleContext.Provider value={{ toggle: toggle }}>
      <ThemeProvider
        theme={{
          mode: localStorage.getItem("mode")
            ? localStorage.getItem("mode")
            : themeState.mode
        }}
      >
        <>{children}</>
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};
