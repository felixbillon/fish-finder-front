const path = require("path");

module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  setupFiles: ["<rootDir>/tests/unit/setup.ts"],
  testMatch: ["<rootDir>/src/**/?(*.)+(spec|test).[jt]s?(x)"],
  testPathIgnorePatterns: ["/node_modules/"],
  collectCoverageFrom: [
    "<rootDir>/**/src/(components|views|store|gateways)*(/**)/!(*.d).{ts,tsx,vue}",
    "!<rootDir>/**/src/**/index.{js,ts}"
  ],
  reporters: [
    "default",
    [
      "jest-junit",
      {
        suiteName: "jest tests",
        outputDirectory: "./report",
        outputName: "junit.xml",
        classNameTemplate: "{classname}-{title}",
        titleTemplate: "{classname}-{title}",
        ancestorSeparator: " › ",
        usePathForSuiteName: "true"
      }
    ]
  ],
  coverageReporters: ["json", "cobertura", "html"]
};
