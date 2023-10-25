module.exports = {
  testEnvironment: 'jsdom',
  setupFiles: ['./src/tests/setup.js'],
  testMatch: ['./src/**/*.test.jsx'],
  globals: {      "__DEV__": true},
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};