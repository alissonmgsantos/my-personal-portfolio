import React, { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext({});

export const ThemeProvider = props => {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    if (theme == 'light') {
      return setTheme(prevState => 'dark');
    }
    return setTheme(prevState => 'light');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useLanguage = () => useContext(ThemeContext);
