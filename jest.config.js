module.exports = {
  setupFilesAfterEnv: [
    '<rootDir>/jest/setup'
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
