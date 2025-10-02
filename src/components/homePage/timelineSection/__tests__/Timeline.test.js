import React from 'react';
import { render } from '@testing-library/react';
import Timeline from '../Timeline';
import data from '../data';
import TimeCard from '../../../timeCard';
import WithThemeProvider from '../../../../helpers/test/withThemeProvider';


describe('Time line component', () => {
  it('renders correctly with time tables', () => {
    const { getByTestId } = render(
      <WithThemeProvider><Timeline /></WithThemeProvider>,
    );
    const timelineContainer = getByTestId(Timeline.testId);
    expect(timelineContainer).toBeInTheDocument();
  });

  it('renders all timeline tables', () => {
    const { getAllByTestId } = render(
      <WithThemeProvider>
        <Timeline title="timeline table title" content={data} />
      </WithThemeProvider>,
    );

    const timelineTables = getAllByTestId(TimeCard.testId);
    expect(timelineTables.length).toBe(data.length);
  });
});
