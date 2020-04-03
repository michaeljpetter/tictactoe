module.exports = {
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
