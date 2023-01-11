module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "components/**/*.ts(x)?",
    "pages/**/*.ts(x)?",
    "lib/**/*.ts(x)?",
    "!**/**/*.d.ts",
  ],
  moduleDirectories: ["node_modules", "<rootDir>"],
  modulePaths: ["<rootDir>"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
}
