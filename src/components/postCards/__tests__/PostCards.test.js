import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PostCards from '../PostCards';

describe('Post card renders', () => {
  it('Render correctly', () => {
    const { getByTestId } = render(<Router><PostCards /></Router>);
    expect(getByTestId('cards-wrapper')).toBeInTheDocument();
  });

  it('Renders correct number of cards', () => {
    const cards = [
      { id: 1, title: 'title one', text: 'some text here' },
      { id: 2, title: 'title two', text: 'some text here' },
      { id: 3, title: 'title three', text: 'some text here' },
      { id: 4, title: 'title four', text: 'some text here' },
    ];
    const { getAllByTestId } = render(<Router><PostCards cards={cards} /></Router>);
    const cardsElements = getAllByTestId(PostCards.cardTestId);
    expect(cardsElements.length).toBe(cards.length);
  });
});
