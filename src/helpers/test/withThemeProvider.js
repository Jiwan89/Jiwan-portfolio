import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import appTheme from '../theme';


export default function WithThemeProvider({ children }) {
  return (
    <ThemeProvider theme={appTheme}>
      {children}
    </ThemeProvider>
  );
}
