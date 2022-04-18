import { InitialOptionsTsJest } from "ts-jest";

const config: InitialOptionsTsJest = {
    moduleFileExtensions: ["ts", "js", "json", "node"],
    testPathIgnorePatterns: ["<rootDir>/node_modules/"],
    preset: "ts-jest",
    testEnvironment: "node",
    collectCoverage: true,
    verbose: true,
};

export default config;
