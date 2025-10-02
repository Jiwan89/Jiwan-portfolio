import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TimeCard from '../../timeCard';
import data, { headerData } from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(8),
    paddingTop: theme.spacing(6),
  },
  timelineContainer: {
    flexGrow: 1,
  },
  timeBar: {
    height: '100%',
    width: theme.spacing(1),
    backgroundColor: theme.colors.primary.light,
    borderRadius: theme.spacing(1),
    position: 'absolute',
    left: 16,
    [`${theme.breakpoints.up('md')}`]: {
      left: -40,
    },
  },
  header: {
    textAlign: 'center',
    padding: '48px 0px',
    marginBottom: theme.spacing(2),
  },
  cardsList: {
    position: 'relative',
  },
}));

export default function Timeline({
  title = headerData.title,
  description = headerData.description, content = data,
}) {
  Timeline.testId = 'timeline-test';
  const classes = useStyles();
  return (
    <div data-testid={Timeline.testId} id={Timeline.id} className={classes.root}>
      <Container>
        <div className={classes.header}>
          <Typography variant="h3" className={classes.title}>{title}</Typography>
          <Typography variant="h6" className={classes.subTitle}>{description}</Typography>
        </div>
        <Grid container className={classes.timelineContainer}>
          <Grid md={3} sm={1} xs={false} item />
          <Grid md={7} sm={10} xs={12} className={classes.cardsList} item>
            <div className={classes.timeBar} />
            {content.map((card) => <TimeCard key={card.title} item={card} />)}
          </Grid>
          <Grid md={2} sm={false} item />
        </Grid>
      </Container>
    </div>
  );
}

Timeline.id = 'timeline-id';
