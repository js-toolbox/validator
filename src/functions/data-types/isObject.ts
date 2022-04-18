/**
 * isObject
 *
 * @description Function that checks whether the provided string is an object.
 * @param { unknown } param The variable to check
 * @param { boolean } allowMap Whether a Map should be allowed as an object
 * @returns { boolean } If value is a valid object.
 */
const isObject = (param: unknown, allowMap?: boolean): boolean => {
    // Allow the value to be a Map, a map is an object which can be used to remember the order of the
    if (allowMap) return typeof param === "object" && !Array.isArray(param) && param !== null;

    return typeof param === "object" && !Array.isArray(param) && param !== null && !(param instanceof Map);
};

export { isObject };
