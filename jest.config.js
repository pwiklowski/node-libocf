module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  "collectCoverage": true,
  "coverageReporters": ["json", "html"],
  testPathIgnorePatterns: ["/dist"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};