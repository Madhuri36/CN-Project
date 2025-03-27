import React, { createContext, useContext, useEffect, useState } from "react";
import homepageDark from "../assets/homepage.jpg";
import homepageLight from "../assets/homepage_light.jpg";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) return storedTheme;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  const themes = {
    dark: {
      "--bg-color-navbar": "#121212",
      "--main-text": "#ffffff", //text-white
      "--bg-one": "#18181b", //bg-zinc-900 Recieviadd device form
      "--bg-two": "#27272a", //bg-zinc-800 Recieving
      "--bg-three": "#3f3f46", //bg-zinc-700, nav-line, home-cards
      "--small-text": "#9ca3af", //text-gray-400, userIp
      "--background-image": `url(${homepageDark})`, // Dark mode background
      "--home-bg": "#00000080", // bg-black
      "--sub-text": "#1f2937", // text-gray-700
      "--add-device": "#4b5563", //bg-gray-600
      "--green-button": "#15803d", //green button
      "--green-buttonhover": "#22c55e", //green button hover
      "--add-edit": "#3f3f46", //add edit cards
      "--settings": "#27272a", //settings card
      "--settings-mode": "#52525b", //settings card
      "--settings-hover": "#18181b", //settings card

    },
    light: {
      "--bg-color-navbar": "#dfdfdf",
      "--main-text": "#000000",
      "--bg-one": " #d4d4d8", //bg-zinc-900 Recieviadd device form
      "--bg-two": "#a1a1aa",
      "--bg-three": "#d4d4d8",
      "--small-text": "#374151",
      "--background-image": `url(${homepageLight})`, // Light mode background
      "--home-bg": "#F0F0F080", // bg-black
      "--sub-text": "#d1d5db", // text-gray-300
      "--add-device": "#d1d5db", //bg-gray-600
      "--green-button": "#22c55e", //green button
      "--green-buttonhover": "#15803d", //green button hover
      "--add-edit": "#c1c1c7", //add edit cards
      "--settings": "#d4d4d8", //settings card
      "--settings-mode": "#a1a1aa", //settings card
      "--settings-hover": "#71717a", //settings card
    }
  };
  

  useEffect(() => {
    const root = document.documentElement;
    const themeVars = theme === "system" 
      ? window.matchMedia("(prefers-color-scheme: dark)").matches ? themes.dark : themes.light
      : themes[theme];
    
    Object.entries(themeVars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    
    root.classList.toggle("dark", theme === "dark");
    root.classList.toggle("light", theme === "light");

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
