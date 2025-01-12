module.exports = {
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testMatch: ["**/__test__/**/*.test.(ts|js)"],
  testEnvironment: "node",
  setupFilesAfterEnv: ["jest-extended/all"],
};
