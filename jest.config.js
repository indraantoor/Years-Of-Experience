module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.js?$": require.resolve("babel-jest"),
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/components/**/*.js",
    "src/helpers/**/*.js",
    "src/pages/Profile/**/*.js",
    "src/utils/**/*.js",
    "!src/components/EditProfilePic/helpers.js",
    "!src/components/EditCompanyPic/helpers.js",
  ],
};
