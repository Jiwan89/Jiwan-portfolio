import React from 'react';
import { render } from '@testing-library/react';
import FluidGridSection from '../FluidGridSection';
import data from '../data';
import CardList from '../../../cardList';
import WithThemeProvider from '../../../../helpers/test/withThemeProvider';

describe('Fluid section component', () => {
  it('renders correctly with cards', () => {
    const { getByTestId, getAllByTestId } = render(
      <WithThemeProvider>
        <FluidGridSection content={data} />
      </WithThemeProvider>,
    );
    const mainSectionContainer = getByTestId(FluidGridSection.testId);
    const cards = getAllByTestId(CardList.testId);
    expect(mainSectionContainer).toBeInTheDocument();
    expect(cards.length).toBe(data.length);
  });

  it('has title and description', () => {
    const { getByText } = render(
      <WithThemeProvider>
        <FluidGridSection title="title" description="description" />
      </WithThemeProvider>,
    );
    const sectionTitleElement = getByText('title');
    const descriptionElement = getByText('description');
    expect(sectionTitleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});
