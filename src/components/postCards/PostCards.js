import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => createStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '&::after': {
      content: '',
      flex: 'auto',
    },
  },
  card: {
    maxWidth: '30%',
    minWidth: '30%',
    margin: '14px',
    display: 'flex',
    maxHeight: '392px',
    overflow: 'hidden',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    width: '256px',
    paddingBotton: '12px',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
    marginRight: '14px',
  },
  headerTitle: {
    display: 'flex',
    padding: '0px 0px 12px 0px',
    alignItems: 'center',

  },
  bodyMedia: {
    marginRight: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
  },
  actionButtonWrapper: {
    direction: 'rtl',
  },
}));

const defaultCards = [
  { id: 1, title: 'title one', text: 'some text here' },
  { id: 2, title: 'title two', text: 'some text here' },
];

function PostCards({ cards = defaultCards }) {
  PostCards.testId = 'cards-wrapper';
  PostCards.cardTestId = 'card-test';
  const classes = useStyles();

  return (
    <div className={classes.root} data-testid={PostCards.testId}>
      {cards.map((card) => (
        <Card className={classes.card} key={card.id} data-testid={PostCards.cardTestId}>
          <CardContent>
            <div className={classes.headerTitle}>
              <Avatar aria-label="recipe" className={classes.avatar}>{card.title}</Avatar>
              <Typography className={classes.headerTitle} variant="h6" color="textSecondary">using React hooks</Typography>
            </div>
            <div className={classes.body}>
              <div className={classes.bodyMedia}>
                <CardMedia
                  className={classes.media}
                  image="https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg"
                />
              </div>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and
                a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you like.
              </Typography>
            </div>
            <div className={classes.actionButtonWrapper}>
              <Button component={Link} to={{ pathname: 'article/react/89' }}>React more</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}


export default PostCards;
