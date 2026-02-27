import React, {createContext, useContext, useState} from 'react';
import {Appearance} from 'react-native';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({children}) => {
  const colorScheme = Appearance.getColorScheme();
  const [theme, setTheme] = useState(colorScheme);

  Appearance.addChangeListener(({colorScheme}) => {
    setTheme(colorScheme);
  });

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
