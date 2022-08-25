/**
 * 截取 Object.prototype.toString.call 所获取到的字符串中的类型
 * @param {string} value
 * @returns {string}
 */
export const splitParmsType = (value: string): string => value.substring(8, value.length - 1);

/**
 * 通过 Object.prototype.toString.call 获取类型
 * @param {unknown} value
 * @returns {string}
 */
export const getParamsType = (value: unknown): string => Object.prototype.toString.call(value);

/**
 * 可以获取到 Object.prototype.toString.call 的类型
 * @param {unknown} value
 * @returns {string}
 */
export const getType = (value: unknown): string => splitParmsType(getParamsType(value));

/**
 * 是否为 Function
 * @param {unknown} value
 * @returns {boolean}
 */
export const isFunction = (value: unknown): boolean => getType(value) === 'Function';