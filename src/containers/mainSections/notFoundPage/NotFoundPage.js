import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  notFoundPage: {
    background: 'url(https://media.giphy.com/media/IxjZ4cgqh2VP2/giphy.gif)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    marginBottom: -180,
    backgroundSize: 'cover',
    height: '100vh',
  },
  pageText: {
    height: '80vh',
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    fontFamily: theme.customFont.font,
  },
}));

export default function NotFoundPage() {
  const classes = useStyles();
  return (
    <div data-testid="not-found-page" className={classes.notFoundPage}>
      <Container>
        <Grid container>
          <Grid item md={3} xs={false} />
          <Grid item md={6} xs={12}>
            <Typography variant="h2" className={classes.pageText}>
              We are working
              <br />
              on it!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
