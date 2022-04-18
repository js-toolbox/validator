/**
 * isArray
 *
 * @description Function that checks whether the provided string is an array.
 * @param { unknown } param The variable to check
 * @returns { boolean } If value is an array.
 */
const isArray = (param: unknown): boolean => {
    return Array.isArray(param);
};

export { isArray };
