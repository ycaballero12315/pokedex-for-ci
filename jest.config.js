module.exports = {
  testEnvironment: "jest-environment-jsdom", // ✅ ahora lo encuentra
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  moduleFileExtensions: ["js", "jsx"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
};
