// Function imports
import { isObject } from "../../../functions/data-types/isObject";

describe("isObject", () => {
    it("should return true if the given value is a valid object", () => {
        const prop = "property";
        const validObjects = [{}, { prop }, { prop: "val" }, new Object()];

        // Loop over the valid objects and check if they are actually valid
        for (const obj of validObjects) {
            expect(isObject(obj)).toEqual(true);
        }
    });

    it("should return true if the given value is a valid object, also when it is a map", () => {
        const prop = "property";
        const validObjects = [{}, { prop }, { prop: "val" }, new Object(), new Map()];

        // Loop over the valid objects and check if they are actually valid
        for (const obj of validObjects) {
            expect(isObject(obj, true)).toEqual(true);
        }
    });

    it("should return false if the given value is not a valid object and also not a valid map", () => {
        const invalidObjects = [null, undefined, [], 0, new Map()];

        // Loop over the invalid objects and check if they are actually invalid.
        for (const obj of invalidObjects) {
            expect(isObject(obj)).toEqual(false);
        }
    });
});
