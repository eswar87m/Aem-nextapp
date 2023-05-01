module.exports = {
    testEnvironment: "jsdom",
    moduleNameMapper: {
      "^@/components(.*)$": "<rootDir>/components$1",
      "^@/layouts(.*)$": "<rootDir>/layouts$1",
      "^@/utils(.*)$": "<rootDir>/utils$1"
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"]
  };
``  