// Function imports
import { isArray } from "../../../functions/data-types/isArray";

describe("isArray", () => {
    it("should return true if the given value is a valid array", () => {
        const validArrays = [[], [1, 2, 3], ["test"], new Array()];

        // Loop over the invalid arrays and check if they are actually valid
        for (const arr of validArrays) {
            expect(isArray(arr)).toEqual(true);
        }
    });

    it("should return false if the given value is not a valid array", () => {
        const invalidArrays = [null, undefined, {}, 0, new Map()];

        // Loop over the invalid arrays and check if they are actuallyinvalid.
        for (const arr of invalidArrays) {
            expect(isArray(arr)).toEqual(false);
        }
    });
});
