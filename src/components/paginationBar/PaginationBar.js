import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default function PaginationBar({ count = 10, onClick = () => {} }) {
  const classes = useStyles();
  return (
    <>
      <div
        data-testid={PaginationBar.testId}
        className={classes.root}
      >
        <Pagination count={count} onChange={(e, n) => onClick(n)} />
      </div>
    </>
  );
}

PaginationBar.testId = 'pagination-test-id';
