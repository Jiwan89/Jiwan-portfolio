import React from 'react';
import { render } from '@testing-library/react';
import AppFooter from '../AppFooter';
import WithThemeProvider from '../../../helpers/test/withThemeProvider';
import data from '../data';

describe('App main footer components', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <WithThemeProvider>
        <AppFooter />
      </WithThemeProvider>,
    );
    const footerElement = getByTestId(AppFooter.testId);
    expect(footerElement).toBeInTheDocument();
  });

  it('shows social network links', () => {
    const { getByText } = render(
      <WithThemeProvider>
        <AppFooter />
      </WithThemeProvider>,
    );
    const footerElement = getByText(data.socialLinks[0].name);
    expect(footerElement).toBeInTheDocument();
  });
});
