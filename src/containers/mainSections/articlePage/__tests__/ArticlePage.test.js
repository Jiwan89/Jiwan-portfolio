import React from 'react';
import { render } from '@testing-library/react';
import ArticlePage from '../ArticlePage';
import data from '../article';


describe('Article page component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<ArticlePage />);
    expect(getByTestId(ArticlePage.testId)).toBeInTheDocument();
  });

  it('displays the passed content', () => {
    const { getByText } = render(<ArticlePage article={data} />);
    const title = getByText(data.title);
    const body = getByText(data.body);
    expect(title).toBeInTheDocument();
    expect(body).toBeInTheDocument();
  });
});
