import React from 'react';
import { render } from '@testing-library/react';
import CardList from '../CardList';
import WithThemeProvider from '../../../helpers/test/withThemeProvider';


const cardData = {
  title: 'Front End',
  icon: '',
  listItems: [
    {
      title: 'JavaScript',
      subTitle: 'ES6 - ES7/ CommonJS, AMD',
      icon: '',
    },
    {
      title: 'React',
      subTitle: 'hooks/ Best Practices',
      icon: '',
    },
    {
      title: 'Angular',
      subTitle: 'V2-5',
      icon: '',
    },
    {
      title: 'Legne FM',
      subTitle: 'JQuery/Backbone',
      icon: '',
    },
    {
      title: 'Redux/ Saga',
      subTitle: '',
      icon: '',
    },
  ],
};

describe('Card list component', () => {
  it('renders correctly, with list items', () => {
    const { getAllByTestId, getByText } = render(
      <WithThemeProvider><CardList cardContent={cardData} /></WithThemeProvider>,
    );
    const cardTitleElement = getByText(cardData.title);
    const cardListItems = getAllByTestId(CardList.listItemsTestId);
    expect(cardTitleElement).toBeInTheDocument();
    expect(cardListItems.length).toBe(cardData.listItems.length);
  });
});
