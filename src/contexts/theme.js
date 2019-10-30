import React from 'react'

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
    color:'black',
  },
  dark: {
    foreground: '#ffffff',
    background: '#282c34',
    color:'white',
  },
};

export const ThemeContext = React.createContext(
  themes.light // значение по умолчанию
);