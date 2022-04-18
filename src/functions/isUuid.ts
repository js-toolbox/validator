/**
 * isUuid
 *
 * @description Function that checks whether the provided string is a valid uuid.
 * @param { string } value
 * @returns { boolean } If value is a valid uuid.
 */
const isUuid = (value: string): boolean => {
    const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
    return uuidRegex.test(value);
};

export { isUuid };
