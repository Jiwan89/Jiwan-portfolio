import { createMuiTheme } from '@material-ui/core/styles';

const appTheme = createMuiTheme({
 
  colors: {
    primary: {
      light: '#017cff',
      main: '#93c8fe',
      dark: '#93c8fe',
    },
    white: {
      main: 'white',
    },
  },
  customFont: {
    font: 'Bungee Shade, "cursive"',
  },
});

appTheme.typography.h3 = {
  fontWeight: 300,
  fontSize: 'calc(1.8rem + 1vw)',
  marginBottom: 'calc(1rem + 1vw)',
};

appTheme.typography.h6 = {
  fontWeight: 300,
  fontSize: '1.25rem',
};

export default appTheme;
