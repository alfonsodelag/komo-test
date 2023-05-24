module.exports = {
  testEnvironment: "jest-environment-jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.js",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest",
  },
  testMatch: [
    "**/__tests__/**/*.test.(js|jsx|ts|tsx)",
    "**/?(*.)+(spec|test).(js|jsx|ts|tsx)",
  ],
};
