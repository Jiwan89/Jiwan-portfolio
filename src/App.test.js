import React from 'react';
import { render } from '@testing-library/react';
import AppFooter from './components/appFooter';
import '@testing-library/jest-dom/extend-expect';
import CustomAPP from './App';
import routesConfig from './routes/routesConfig';

describe('main app component', () => {
  it('main app container renders correctly', () => {
    const { getByTestId } = render(<CustomAPP />);
    const mainAppContainer = getByTestId('app-container');
    expect(mainAppContainer).toBeInTheDocument();
  });

  it('lands on home page', () => {
    const { getAllByTestId } = render(<CustomAPP />);
    const homePageTestId = routesConfig[0].testId;
    const homePageComponent = getAllByTestId(homePageTestId)[0];
    expect(homePageComponent).toBeInTheDocument();
  });

  it('has a footer', () => {
    const { getByTestId } = render(<CustomAPP />);
    const appFooter = getByTestId(AppFooter.testId);
    expect(appFooter).toBeInTheDocument();
  });
});
