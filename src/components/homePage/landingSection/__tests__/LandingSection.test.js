import React from 'react';
import { render } from '@testing-library/react';
import LandingSection from '../LandingSection';
import data from '../data';
import WithThemeProvider from '../../../../helpers/test/withThemeProvider';


describe('First homepage section', () => {
  const { title, description } = data;
  it('renders main container', () => {
    const { getByTestId } = render(
      <WithThemeProvider>
        <LandingSection title={title} description={description} />
      </WithThemeProvider>,
    );
    const mainContainer = getByTestId(LandingSection.testId);
    expect(mainContainer).toBeInTheDocument();
  });

  /**
   * TODO: text animation prevent from finding the right element
   */
  // it('has main title and description', () => {
  //   const { getByText } = render(
  //     <WithThemeProvider>
  //       <LandingSection />
  //     </WithThemeProvider>,
  //   );
  //   const sectionDescription = getByText(description);
  //   const sectionTitle = getByText(title);
  //   expect(sectionDescription).toBeInTheDocument();
  //   expect(sectionTitle).toBeInTheDocument();
  // });
});
