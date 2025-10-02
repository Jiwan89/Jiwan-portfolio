import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    boxShadow: 'none',
  },
  appName: {
    fontSize: 22,
    color: theme.colors.primary.light,
    flexGrow: 1,
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
  },
  navButton: {
    marginRight: theme.spacing(0.5),
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(3),
    },
    borderBottom: '1px solid',
    borderRadius: 0,
    opacity: 0.6,
    '&:hover': {
      opacity: 1,
    },
  },
  tabsContainer: {
    [`${theme.breakpoints.up('md')}`]: {
      display: 'block',
    },
  },
  toolbar: {
    [theme.breakpoints.down('sm')]: {
      // paddingLeft: 4,

    },
  },
}));

export default function AppNavbar({ tabs = [] }) {
  const classes = useStyles();
  return (
    <div data-testid="app-navbar" className={classes.root}>
      <AppBar className={classes.root}>
        <Container className={classes.toolbar}>
          <Toolbar className={classes.toolbar}>
            <Typography
              className={classes.appName}
              data-testid="website-title"
              variant="h5"
            >
              {'<Jiwan osman/>'}
            </Typography>
            <div className={classes.tabsContainer}>
              {tabs
                .filter((route) => route.showOnTabs)
                .map((route) => (
                  <Tooltip title={route.description} key={route.id}>
                    <Button
                      component={Link}
                      to={{ pathname: route.active && route.path }}
                      data-testid={route.testId}
                      className={classes.navButton}
                    >
                      {route.name}
                    </Button>
                  </Tooltip>
                ))}
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
