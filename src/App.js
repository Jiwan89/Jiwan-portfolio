import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Routes, appRoutes } from './routes/routesConfig';
import AppNavbar from './components/appNavbar';
import AppFooter from './components/appFooter/AppFooter';
import appTheme from './helpers/theme';
import WithThemeProvider from './helpers/test/withThemeProvider';


const useStyles = makeStyles((theme) => ({
  app: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing(8),
  },
  appBody: {
    flexGrow: 1,
  },
}));

function App({ testEnv, history }) {
  const classes = useStyles();
  return (
    <div data-testid="app-container" className={classes.app}>
      <WithThemeProvider theme={appTheme}>
        <div className={classes.appBody}>
          <Routes testEnv={testEnv} history={history}>
            <AppNavbar tabs={appRoutes} />
          </Routes>
        </div>
        <AppFooter />
      </WithThemeProvider>
    </div>
  );
}


export default App;
