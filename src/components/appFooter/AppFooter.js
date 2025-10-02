import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { fullWave } from '../../assets/icons/svgIconsMap';
import footerData from './data';

const useStyles = makeStyles((theme) => ({
  appFooter: {
    position: 'relative',
    minHeight: 120,
    left: 0,
    width: '100%',
    margin: 0,
  },
  contentWrapper: {
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(0.5),
    marginTop: -1,
    background: theme.colors.primary.light,
  },
  backgroundContainer: {
    maxWidth: 'auto',
    width: '100vw',
    bottom: 0,
    maxHeight: '200px',
    overflow: 'hidden',
    '& svg': {
      width: '107%',
      height: '99px',
      marginBottom: '-4px',
      fill: theme.colors.primary.light,
      [theme.breakpoints.up('sm')]: {

        height: 200,
        width: '100%',
      },
    },
  },
  linkItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    '& svg': {
      marginRight: theme.spacing(1),
      width: 'auto',
      height: 22,
      fill: 'white',
      [theme.breakpoints.up('sm')]: {
        height: 28,
        marginRight: theme.spacing(2),
      },
    },
    '& a': {
      color: 'white',
      textDecoration: 'none',
      fontSize: '0.8rem',
      [theme.breakpoints.up('sm')]: {
        fontSize: '1rem',
      },
    },
  },
  copyRight: {
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
    paddingTop: theme.spacing(4),
  },
}));


export default function AppFooter({ content = footerData }) {
  const { socialLinks, copyRights } = content;

  AppFooter.testId = 'appFooter-test';
  const classes = useStyles();
  const IconComponent = ({ icon }) => ((!!icon && typeof icon === 'function') ? icon() : null);
  return (
    <div className={classes.appFooter} data-testid={AppFooter.testId}>
      <div className={classes.backgroundContainer}>
        <IconComponent icon={fullWave} />
      </div>
      <Container className={classes.contentWrapper} maxWidth={false}>
        <Grid container>
          <Grid md={3} xs={false} item />
          {socialLinks.map((link) => (
            <Grid
              item
              key={link.name}
              md={6 / socialLinks.length}
              xs={12 / socialLinks.length}
              className={classes.linkItem}
            >
              <IconComponent icon={link.icon} />
              <a href={link.url} rel="noopener noreferrer" target="_blank">
                {link.name}
              </a>
            </Grid>
          ))}
        </Grid>
        <Grid container className={classes.copyRight}>{copyRights}</Grid>
      </Container>
    </div>
  );
}
