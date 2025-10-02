import React from 'react';
import {
  Typography, Grid, Card, CardHeader, CardMedia, Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import columnsData, { headerData } from './data';


const useStyles = makeStyles((theme) => ({
  landingSection: {
  },
  gridContainer: {
    margin: '24px 0px',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: 24,
    flexDirection: 'column',
    alignItems: 'center',
  },
  ctaButton: {
    marginTop: 24,
  },
  title: {
    marginBottom: 12,
    
  },
  aubTitle: {
    marginBottom: 24,
  },
  cardItem: {
    height: 120,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 24,
  },
  card: {
    boxShadow: 'none',
  },
  cardImage: {
    minHeight: 120,
    [theme.breakpoints.only('sm')]: {
      backgroundSize: '50%',
    },
    [theme.breakpoints.only('md')]: {
      backgroundSize: '50%',
    },
  },
  cardsContainer: {
    margin: '68px 0px',
    justifyContent: 'space-between',
  },
}));

export default function CenteredContainer({
  title = headerData.title,
  description = headerData.description,
  cardsData = columnsData,
}) {
  CenteredContainer.testId = 'centeredContainer-test';
  CenteredContainer.cardsTestId = 'cards-test';
  const classes = useStyles();

  return (
    <div data-testid={CenteredContainer.testId} id={CenteredContainer.id}>
      <Container>
        <Grid container>
          <Grid xs={12} lg={12} item>
            <div className={classes.gridContainer}>
              <Typography variant="h3" className={classes.title}>
                {' '}
                {title}
              </Typography>
              <Typography variant="h6" className={classes.subTitle}>
                {' '}
                {description}
              </Typography>
            </div>
          </Grid>
          <Grid xs={12} md={12} container spacing={2} className={classes.cardsContainer} item>
            {!!cardsData && cardsData.map((card) => (
              <Grid
                key={card.id}
                className={classes.columnGrid}
                xs={6}
                md={Math.round(12 / cardsData.length)}
                item
              >
                <Card className={classes.card} data-testid={CenteredContainer.cardsTestId}>
                  <CardMedia
                    className={classes.cardImage}
                    image={card.image}
                    title="image tile"
                  />
                  <CardHeader
                    titleTypographyProps={{ style: { marginBottom: 12 } }}
                    style={{ textAlign: 'center' }}
                    title={card.title}
                    subheader={card.description}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

// passing id here will allow to use it by other components as a reference to the main element
CenteredContainer.id = 'centered-container';
