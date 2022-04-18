// Function imports
import { isArray } from "./functions/data-types/isArray";
import { isObject } from "./functions/data-types/isObject";
import { isUuid } from "./functions/isUuid";

// Object with all validation functions
const validator = {
    isArray,
    isObject,
    isUuid,
};

export { isArray, isObject, isUuid };
export default validator;
