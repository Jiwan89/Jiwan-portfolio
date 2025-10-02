import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import App from '../../../../App';

describe('Not found page', () => {
  it('shows not found page for unknown route', () => {
    const history = createMemoryHistory();
    history.push('/notExistRoute');
    const { getByTestId } = render(<App testEnv history={history} />);
    const notFoundPageElement = getByTestId('not-found-page');
    expect(notFoundPageElement).toBeInTheDocument();
  });
});
