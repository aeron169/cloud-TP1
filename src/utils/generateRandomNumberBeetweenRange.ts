/**
 * Take a range and return a random number between the range
 * @param range an array with min and max value for the random number
 * @returns A random number between the range
 */
const generateRandomNumberBeetweenRange = (range : [min: number, max: number]) : number => {
  const [min, max] = range
  return Math.floor(Math.random() * (max - min) + min);
}

// default export
export default generateRandomNumberBeetweenRange;