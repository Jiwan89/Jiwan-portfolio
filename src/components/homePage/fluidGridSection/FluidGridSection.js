import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container, Paper, Grid, Typography,
} from '@material-ui/core';
import CardList from '../../cardList';
import skillsData, { headerData } from './data';

const useStyles = makeStyles((theme) => ({

  root: {
    margin: `${theme.spacing(8)}px 0px`,
  },
  mainContainer: {
    padding: 23,
    backgroundColor: theme.colors.primary.light,
  },
  header: {
    color: 'white',
    textAlign: 'center',
    padding: '48px 0px',
    marginBottom: theme.spacing(20),
  },
  title: {
    color: 'white',
  },
  subTitle: {
    color: 'White',
  },
  content: {
    marginTop: -theme.spacing(21),
    minHeight: theme.spacing(30),
  },
  cardContainer: {
    height: '100%',
  },
}));


export default function FluidGridSection({
  title = headerData.title,
  description = headerData.description,
  content = skillsData,
}) {
  const classes = useStyles();
  FluidGridSection.testId = 'fluid-grid-test';
  return (
    <div data-testid={FluidGridSection.testId} className={classes.root} id={FluidGridSection.id}>
      <div className={classes.mainContainer}>
        <div className={classes.header}>
          <Typography variant="h3" className={classes.title}>{title}</Typography>
          <Typography variant="h6" className={classes.subTitle}>{description}</Typography>
        </div>
      </div>
      <Container className={classes.content}>
        <Grid spacing={3} container>
          {!!content && content.map((card) => (
            <Grid
              key={card.title}
              xs={12}
              sm={6}
              md={4}
              item
            >
              <Paper className={classes.cardContainer}>
                <CardList cardContent={card} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

FluidGridSection.id = 'fluid-grid-section-id';
