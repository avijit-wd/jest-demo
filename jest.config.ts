import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"], // Adjust the path as needed
  coverageReporters: ["text", "lcov", "clover"], // Optional: Choose the desired coverage reporters
};

export default config;
