'use strict';

module.exports = {
  roots: [
    '<rootDir>/__tests__', // Specify the __tests__ directory for Jest to look for test files
  ],
  testEnvironment: 'jsdom', // If you're using jsdom for testing
  coverageDirectory: 'coverage',
  testResultsProcessor: './node_modules/jest-junit',
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'test-results',
        outputName: 'results.xml',
      },
    ],
  ],
};
