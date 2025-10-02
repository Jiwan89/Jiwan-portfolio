import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card, CardHeader, CardContent, Button, Collapse, CardActions, Typography,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  timeCard: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(4),
    minHeight: theme.spacing(8),
    position: 'relative',
    overflow: 'initial',
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(4),
    },
  },
  timeContainer: {
    position: 'absolute',
    left: 9,
    display: 'flex',
    alignItems: 'center',
    top: -theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      left: -47,
      top: 0,
    },
  },
  timeCircle: {
    width: 22,
    height: 22,
    backgroundColor: theme.colors.primary.light,
    borderRadius: '50%',
  },
  timeText: {
    position: 'absolute',
    top: theme.spacing(0.3),
    marginLeft: theme.spacing(4),
    color: 'gray',
    whiteSpace: 'nowrap',
    [theme.breakpoints.up('md')]: {
      right: theme.spacing(1),
    },
  },
  cardContent: {
    padding: 0,
  },
  listItem: {

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
  showMoreIcon: {
    padding: theme.spacing(1),
  },
  showMoreContainer: {
    miniHeight: theme.spacing(8),
    justifyItems: 'center',
    display: 'flex',
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
  },
  cardActions: {
    justifyContent: 'flex-end',
  },
  cardActionsButtons: {

  },
  companyNameContainer: {
    position: 'absolute',
    left: -48,
    top: theme.spacing(4),
    right: 'auto',
    [theme.breakpoints.down('md')]: {
      top: -theme.spacing(3.7),
      marginLeft: theme.spacing(4),
      right: 0,
    },
    [theme.breakpoints.only('md')]: {
      left: -90,
      right: 'auto',
    },
  },
  companyName: {
    position: 'absolute',
    whiteSpace: 'nowrap',
    right: theme.spacing(1),
    color: 'gray',
  },
  jobDescription: {
    paddingBottom: theme.spacing(2),
  },
  dutyItem: {
    listStyle: 'circle',
    color: 'gray',
  },
}));

export default function TimeCard({ item }) {
  TimeCard.testId = 'time-card-test';
  const {
    title,
    time,
    workList,
    company,
    references,
    jobDescription,
    description,
  } = item;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card key={item} className={classes.timeCard} data-testid={TimeCard.testId}>
      <CardHeader title={title} subheader={description} />
      {/* time line indicator */}
      <div className={classes.timeContainer}>
        <div className={classes.timeCircle} />
      </div>
      <div className={classes.timeContainer}>
        <div style={{ position: 'relative' }}>
          <div className={classes.timeText}>{time}</div>
        </div>
      </div>
      <div className={classes.companyNameContainer}>
        <div style={{ position: 'relative' }}>
          <div className={classes.companyName}>{company.name}</div>
        </div>
      </div>
      <CardContent className={classes.cardContent}>
        <ul className={classes.listItem}>
          {workList.map((listItem) => (
            <li
              key={listItem}
              className={classes.dutyItem}
            >
              {listItem}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <span style={{ fontSize: 12 }}>{expanded ? 'Less' : 'More'}</span>
        <IconButton
          className={clsx(classes.expand, { [classes.expandOpen]: expanded }, classes.showMoreIcon)}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse
        in={expanded}
        timeout="auto"
        unmountOnExit
      >
        <div className={classes.showMoreContainer}>
          <div className={classes.cardActionsButtons}>
            {!!jobDescription && <Typography variant="subtitle1" className={classes.jobDescription}>{jobDescription}</Typography>}
            {!!company && <Button href={company.link}>{company.name}</Button>}
            <br />
            {!!references && <Button href={references.link}>{references.text}</Button>}
          </div>
        </div>
      </Collapse>
    </Card>
  );
}
