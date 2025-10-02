import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Blog from '../Blog';

describe('Blog main page', () => {
  it('Renders correctly', () => {
    const { getByTestId } = render(<Router><Blog /></Router>);
    expect(getByTestId('blog-section')).toBeInTheDocument();
  });
});
