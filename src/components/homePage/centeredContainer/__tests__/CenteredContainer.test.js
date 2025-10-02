import React from 'react';
import { render } from '@testing-library/react';
import CenteredContainer from '../CenteredContainer';
import cardsData from '../data';
import WithThemeProvider from '../../../../helpers/test/withThemeProvider';


const props = {
  title: 'first section title',
  description: 'here is the first section description, it should be smaller than the title, but not so small',
};


describe('Centered Container', () => {
  const { title, description } = props;
  it('renders main container', () => {
    const { getByTestId } = render(
      <WithThemeProvider>
        <CenteredContainer />
      </WithThemeProvider>,
    );
    const mainContainer = getByTestId(CenteredContainer.testId);
    expect(mainContainer).toBeInTheDocument();
  });

  it('has main title and description', () => {
    const { getByText } = render(
      <WithThemeProvider>
        <CenteredContainer title={title} description={description} />
      </WithThemeProvider>,
    );
    const sectionDescription = getByText(/description/i);
    expect(sectionDescription).toBeInTheDocument();
    const sectionTitle = getByText(title);
    expect(sectionTitle).toBeInTheDocument();
  });

  it('renders passed cards', () => {
    const { cardsTestId } = CenteredContainer;
    const { getAllByTestId, getByText } = render(
      <WithThemeProvider>
        <CenteredContainer cardsData={cardsData} />
      </WithThemeProvider>,
    );
    const cards = getAllByTestId(cardsTestId);
    const randomCard = getByText(cardsData[2].title);
    expect(cards.length).toBe(cardsData.length);
    expect(randomCard).toBeInTheDocument();
  });
});
