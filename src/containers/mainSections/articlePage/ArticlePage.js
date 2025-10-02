import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import articleData from './article';


const useStyles = makeStyles((theme) => ({
  articleHeader: {
    position: 'relative',
    backgroundColor: theme.palette.grey[600],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: 364,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  backButton: {
    color: 'white',
    borderColor: 'white',
    position: 'absolute',
    bottom: 48,
    left: 48,
  },
}));

/**
 *
 * @param {name} string, givin by default from routers config object
 * @param {testId} string given by default from routers config object
 */
export default function ArticlePage({ article = articleData }) {
  ArticlePage.testId = 'article-page-test';
  const history = useHistory();
  const {
    title, body, date, img, description,
  } = article;

  const classes = useStyles();
  return (
    <div data-testid={ArticlePage.testId}>
      <Paper
        className={classes.articleHeader}
        style={{ backgroundImage: `url(${img})` }}
      >
        {/* Increase the priority of the hero background image */}
        <img style={{ display: 'none' }} src={img} alt="header" />
        <div className={classes.overlay} />
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                {title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>{description}</Typography>
            </div>
          </Grid>
        </Grid>
        <Button
          className={classes.backButton}
          variant="outlined"
          onClick={() => history.goBack()}
        >
          Go back
        </Button>
      </Paper>
      <div>{date}</div>
      <div className="article-body">{body}</div>
    </div>
  );
}
