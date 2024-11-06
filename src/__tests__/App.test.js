// src/__tests__/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders the welcome message', () => {
  render(<App />);

  // Find the element with the text 'welcome'
  const welcomeElement = screen.getByText(/welcome/i);

  // Use Jest's default assertions to check if it's found
  expect(welcomeElement).toBeTruthy(); // Asserts that the element exists
});
