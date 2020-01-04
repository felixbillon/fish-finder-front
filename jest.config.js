const path = require("path");

module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  setupFiles: ["<rootDir>/tests/unit/setup.ts"],
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
  coverageReporters: ["json", "cobertura", "html"],
  globals: {
    "ts-jest": {
      tsConfig: path.resolve(__dirname, "tsconfig.test.json")
    }
  }
};
