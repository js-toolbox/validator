import validator from "../index";

describe("Default export", () => {
    const methods = ["isArray", "isObject", "isUuid", "ratio"] as const;

    methods.forEach((method) => {
        expect(validator.hasOwnProperty(method)).toBeTruthy();
        expect(validator[method]).toBeInstanceOf("function");
    });
});
