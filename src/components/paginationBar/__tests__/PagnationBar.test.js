import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PaginationBar from '../PaginationBar';
import '@testing-library/jest-dom/extend-expect';


describe('Pagination component', () => {
  it('Pagination renders correctly', () => {
    const { getByTestId } = render(<PaginationBar />);
    expect(getByTestId(PaginationBar.testId)).toBeInTheDocument();
  });

  it('renders the correct number of items', () => {
    const { container } = render(<PaginationBar count={9} />);
    const buttons = container.querySelectorAll('[aria-label^="Go to page"]');
    expect(buttons.length).toBe(5);
  });

  it('click on pagination works', () => {
    const clickFunction = jest.fn();
    const { container } = render(<PaginationBar count={9} onClick={clickFunction} />);
    const paginationItem = container.querySelector('button[aria-label^="Go to page 4"]');
    fireEvent.click(paginationItem);
    expect(clickFunction).toHaveBeenCalledWith(4);
    expect(clickFunction).toHaveBeenCalledTimes(1);
  });
});
