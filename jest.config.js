module.exports = {
  setupFiles: [
    '<rootDir>/config/polyfills.js'
  ],
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/src/**/*.spec.js'
  ],
  watchPathIgnorePatterns: [
    '<rootDir>/build/'
  ],
  moduleNameMapper: {
    '^#/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '\\.js$': 'babel-jest'
  }
};
