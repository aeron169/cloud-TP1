
/**
 * This function is used to delay the execution of a function for a given amount of time.
 * We don't directly use setTimeout because it's not usable in a loop, we need to use a promise.
 * @param ms 
 * @returns 
 */
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export default delay;