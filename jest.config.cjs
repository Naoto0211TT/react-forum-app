const config = {
  testEnvironment: 'jest-environment-jsdom',
  roots: ['<rootDir>/src'],
  testMatch: [
    '**/__tests__/**/*.(spec|test).+(jsx|js)',
    '**/?(*.)+(spec|test).+(jsx|js)',
  ],
  moduleNameMapper: {
    '^@/(?!.*\\.css)(.*)$': '<rootDir>/src/$1',
    '\\.(css|scss)$': '<rootDir>/node_modules/jest-css-modules',
  },
}

module.exports = config
