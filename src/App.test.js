import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import Layout from './components/Layout/Layout';
import { Home } from './pages/Home';

jest.mock('./components/Layout/Layout', () => ({ children }) => <div>{children}</div>);
jest.mock('./pages/Home', () => ({
  Home: () => <div>Home Page</div>,
}));
jest.mock('./pages/NotFound', () => ({
  NotFound: () => <div>404 - Page Not Found</div>,
}));
jest.mock('./pages/Article', () => ({
  Article: () => <div>Article Page</div>,
}));

describe('App component', () => {
  test('renders Home component for the root path', () => {
    const {getByText} = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(getByText('Home Page')).toBeInTheDocument();
  });
})