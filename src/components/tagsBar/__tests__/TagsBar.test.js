import React from 'react';
import { render } from '@testing-library/react';
import TagsBar, { postTags } from '../TagsBar';


describe('Tags bar component', () => {
  it('Renders correnctly', () => {
    const { getByTestId } = render(<TagsBar />);
    expect(getByTestId(TagsBar.testId)).toBeInTheDocument();
  });

  it('Show all tags', () => {
    const { getAllByTestId } = render(<TagsBar />);
    expect(getAllByTestId('blog-chip').length).toBe(postTags.length);
  });
});
