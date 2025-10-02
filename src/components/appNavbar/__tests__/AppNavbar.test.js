import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppNavbar from '../AppNavbar';
import { appRoutes } from '../../../routes/routesConfig';
import WithThemeProvider from '../../../helpers/test/withThemeProvider';

describe('App navbar', () => {
  it('Renders correctly', () => {
    const { getByTestId } = render(
      <WithThemeProvider>
        <AppNavbar />
      </WithThemeProvider>,
    );

    const appNavbarElement = getByTestId('app-navbar');
    expect(appNavbarElement).toBeInTheDocument();
  });

  it('Show correct tabs', async () => {
    const { getAllByTestId } = render(
      <WithThemeProvider>
        <Router>
          <AppNavbar tabs={appRoutes} />
        </Router>
      </WithThemeProvider>,
    );
    const appNavbarElement = getAllByTestId('nav-route');
    expect(appNavbarElement.length).toBe(appRoutes.filter((route) => route.showOnTabs).length);
  });

  it('Has website title', () => {
    const { getByTestId } = render(
      <WithThemeProvider>
        <AppNavbar />
      </WithThemeProvider>,
    );
    const websiteTitle = getByTestId('website-title');
    expect(websiteTitle).toBeInTheDocument();
  });
});
