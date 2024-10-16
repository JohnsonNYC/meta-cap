module.exports = {
  testEnvironment: "jsdom", // Use jsdom environment to simulate a browser
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"], // Ensure this is correct for your setup
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest", // Ensure JSX and JS are transformed by Babel
  },
};
