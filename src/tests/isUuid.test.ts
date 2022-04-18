// Function imports
import { isUuid } from "../functions/isUuid";

describe("isUuid", () => {
    it("should return true if the given value is a valid Uuid", () => {
        // Array with 2 valid version 1 Uuids, 2 valid v4 Uuids.
        const validUuids = [
            "40196186-bf11-11ec-9d64-0242ac120002",
            "8808a83a-bf11-11ec-9d64-0242ac120002",
            "14c6e37b-c9f9-45f8-ad8d-bf1d80041728",
            "6ced803a-8822-4b83-9496-91945055ea6e",
        ];

        // Loop over the Uuids and check if they are valid
        for (const uuid of validUuids) {
            expect(isUuid(uuid as string)).toEqual(true);
        }
    });

    it("should return false if the given value is not a valid Uuid", () => {
        // Array with some random data types and invalid UUIDs.
        const unvalidUuids = [
            0,
            null,
            undefined,
            false,
            true,
            "",
            "0123456789",
            "14c6e37b-c9f92-45f8-ad8d-bf1d80041728",
            "6ced803a1-8822-4b83-9496-91945055ea6e",
            "6ced803a1-8822-4b83-9496-91945055ea6e3",
            // "6ced803a-8822-4b83-9496-91945055ea6e",
        ];

        // Loop over the Uuids and check if they are invalid.
        for (const uuid of unvalidUuids) {
            expect(isUuid(uuid as string)).toEqual(false);
        }
    });
});
