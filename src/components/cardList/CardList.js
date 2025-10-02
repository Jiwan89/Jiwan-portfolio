import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  cardHeader: {
    height: 86,
    maxHeight: 86,
    borderBottom: '1px solid lightgray',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
  },
  cardHeaderIcon: {
    width: 40,
    height: 40,
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    marginLeft: 8,
    fill: theme.colors.primary.light,
  },
}));


export default function CardList({ cardContent }) {
  CardList.testId = 'card-list-test';
  CardList.listItemsTestId = 'items-list-test';
  const { title, listItems, icon } = cardContent;
  const classes = useStyles();
  const IconComponent = () => ((!!icon && typeof icon === 'function') ? icon() : null);
  return (
    <div data-testid={CardList.testId}>
      <div className={classes.cardHeader}>
        <div className={classes.cardHeaderIcon}>
          <IconComponent />
        </div>
        <Typography variant="h5">{title}</Typography>
      </div>
      <List className={classes.root}>
        {!!listItems && listItems.map((item) => (
          <ListItem key={item.title} data-testid={CardList.listItemsTestId}>
            <ListItemAvatar>
              <Avatar src={item.icon} />
            </ListItemAvatar>
            <ListItemText primary={item.title} secondary={item.subTitle} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
