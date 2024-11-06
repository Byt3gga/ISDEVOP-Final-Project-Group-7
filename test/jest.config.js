'use strict';

module.exports = {
  roots: [
    '<rootDir>/__tests__', // Specify the __tests__ directory where test files are located
  ],
  testEnvironment: 'jsdom', // Using jsdom as the test environment
  coverageDirectory: '<rootDir>/coverage', // Output directory for code coverage
  testResultsProcessor: './node_modules/jest-junit', // Processor for test results
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: '<rootDir>/test-results', // Output the results to 'test-results' directory
        outputName: 'results.xml', // Name of the results file
      },
    ],
  ],
};
