
/**
 * Choose the gear ratio for a given speed.
 * @param speed 
 * @param maxSpeed 
 * @returns 
 */
export const gearRatioForSpeed = (speed: number, maxSpeed: number) => {
  if(speed < 0.2 * maxSpeed)
    return 1;
  if(speed < 0.4 * maxSpeed)
    return 2;
  if(speed < 0.6 * maxSpeed)
    return 3;
  if(speed < 0.8 * maxSpeed)
    return 4;
  if(speed < 0.9 * maxSpeed)
    return 5;
  return 6;
}