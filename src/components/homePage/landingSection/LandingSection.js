import React from 'react';
import {
  Button, Typography, Grid, Container, ButtonGroup,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typist from 'react-typist';
import coding from '../../../assets/images/coding.jpg';
import scrollToElement from '../../../helpers/scrollToElement';
import defaultContent from './data';

export const skillsTags = [
  {
    id: 1,
    name: 'react tag',
    label: 'React',
    clickable: true,
    active: false,
  },
  {
    id: 2,
    name: 'JavaScript',
    label: 'JavaScript',
    clickable: true,
    active: false,
  },
  {
    id: 3,
    name: 'HTML tag',
    label: 'HTML',
    clickable: true,
    active: true,
  },
  {
    id: 4,
    name: 'Angular',
    label: 'Angular',
    clickable: true,
    active: false,
  },
];

const useStyles = makeStyles((theme) => ({
  landingSection: {
    paddingTop: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(1),
    },
  },
  gridContainer: {
    height: '700px',
    [theme.breakpoints.down('sm')]: {
      height: '100%',
    },
    display: 'flex',
    justifyContent: 'center',
    padding: 24,
    flexDirection: 'column',
  },
  ctaButtons: {
    marginTop: 24,
    borderRadius: 20,
    '& button': {
      color: 'white',
      boxShadow: 'none',
      backgroundColor: theme.colors.primary.light,
      borderRadius: 20,
      whiteSpace: 'nowrap',
      '&:hover': {
        backgroundColor: theme.colors.primary.main,
        boxShadow: 'none',
      },
    },
  },
  title: {
    marginBottom: 12,
    fontWeight: 'light',
  },
  subTitle: {
    marginBottom: 24,
    minHeight: theme.spacing(16),
  },
}));

const cursorProps = {
  show: true,
  blink: true,
  element: ' {}',
  hideWhenDone: true,
  hideWhenDoneDelay: 0,
};

export default function LandingSection({
  title = defaultContent.title,
  description = defaultContent.description,
  pointers,
}) {
  const classes = useStyles();
  LandingSection.testId = 'landingSection-test';

  const handleClick = (elementId) => pointers && scrollToElement(elementId);

  return (
    <div data-testid={LandingSection.testId} className={classes.landingSection}>
      <Container>
        <Grid container>
          <Grid xs={12} md={5} item>
            <div className={classes.gridContainer}>
              <Typography variant="h3" className={classes.title}>
                <Typist cursor={cursorProps}>{title}</Typist>
              </Typography>
              {/* <TagsBar tags={skillsTags} /> */}
              <Typography variant="h6" className={classes.subTitle}>
                <Typist cursor={cursorProps} startDelay={2000}>{description}</Typist>
              </Typography>
              <Grid xs={6} md={5} className={classes.ctaButtons} item>
                <ButtonGroup color="primary" aria-label="pointers">
                  {!!pointers && pointers.map((ele) => <Button variant="contained" key={ele.name} onClick={() => handleClick(ele.id)}>{ele.name}</Button>)}
                </ButtonGroup>
              </Grid>
            </div>
          </Grid>
          <Grid xs={12} md={7} item>
            <img src={coding} style={{ width: '100%' }} alt="section-main" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

LandingSection.id = 'landing-section-element';
