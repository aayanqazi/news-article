import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NotFound from '../NotFound';

describe('NotFound component', () => {
  test('renders the NotFound component with correct text', () => {
    const {getByText, getByRole} = render(
      <Router>
        <NotFound />
      </Router>
    );

    // Check if the heading and paragraph texts are in the document
    expect(getByText('404 - Page Not Found')).toBeInTheDocument();
    expect(getByText('Sorry, the page you are looking for does not exist.')).toBeInTheDocument();

    // Check if the link to the home page is rendered and has the correct href
    const homeLink = getByRole('link', { name: /go to home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
  });
});