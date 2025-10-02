import React, { useState } from 'react';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    background: '#f7f7f6',
    borderRadius: '40px',
    margin: '14px 0px',
    padding: 4,
  },
  customChip: {
    margin: theme.spacing(0.5),
    backgroundColor: 'primary',
  },
  tagsBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'scroll',
    width: '100%',
  },
  title: {
    margin: theme.spacing(2),
    color: 'gray',
  },
}));

export const postTags = [
  {
    id: 1,
    name: 'react tag',
    label: 'React',
    clickable: true,
    active: false,
  },
  {
    id: 2,
    name: 'HTML tag',
    label: 'HTML',
    clickable: true,
    active: true,
  },
  {
    id: 3,
    name: 'Angular',
    label: 'Angular',
    clickable: true,
    active: false,
  },
];

export default function TagsBar({ tags = postTags, clickable = false, title }) {
  const [activeTag, setActiveTag] = useState();
  const classes = useStyles();
  const handleTagClick = (e) => {
    if (clickable) {
      setActiveTag(e.id);
    }
  };
  return (
    <Container className={classes.root} fluid="true">
      <div data-testid="tags-bar" className={classes.tagsBar}>
        {!!title && <Typography className={classes.title}> By Tags#</Typography>}
        {tags.map((tag) => (
          <Chip
            data-testid="blog-chip"
            id="id is here"
            onClick={() => handleTagClick(tag)}
            key={tag.name}
            className={classes.customChip}
            icon={<FaceIcon />}
            label={tag.label}
            clickable={tag.clickable}
            color={activeTag === tag.id ? 'primary' : 'default'}
          />
        ))}
      </div>
    </Container>
  );
}

TagsBar.testId = 'tags-bar';
