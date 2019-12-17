module.exports = {
  roots: ['<rootDir>/test/'],
  // 'ts-jest': {
  //   diagnostics: false
  // },
  preset: "ts-jest",
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/dist/"
  ],
  coverageThreshold: {
    global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80
    }
  }
};
