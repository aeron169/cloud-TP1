import { 
  generateRandomNumberBeetweenRange,
  delay,
  generateRandomPoint
} from "../utils";
import { gearRatioForSpeed } from "../utils/gearRatioForSpeed";

import { Vehicule  } from "../Vehicule/Vehicule";

// The general protocol is the first protocol from the "CDC"
export const generalProtocol = async (client: any, topic: string, vehicule: Vehicule) => {

  const nbrOfStops = vehicule.vehiculeParameters.nbrOfStops;
  const rangeOfPnb: [min: number, max: number] = [0, vehicule.vehiculeParameters.maxCapacity];
  const rangeOfSpeed: [min: number, max: number] = [0, vehicule.vehiculeParameters.maxSpeed];

  
  // Loop to simulate the stops
  for (let i = 0; i < nbrOfStops; i++) {
    await delay(vehicule.vehiculeParameters.latencyBetweenFrames);
    vehicule.speed = generateRandomNumberBeetweenRange(rangeOfSpeed);
    vehicule.location = generateRandomPoint({lat: 43.604652, lng: 1.444209}, 10000);
    vehicule.pnb = generateRandomNumberBeetweenRange(rangeOfPnb);
    client.publish(topic, `${vehicule.vin}|${vehicule.location.lat}|${vehicule.location.lng}|${vehicule.speed}|${Date.now()}|${vehicule.pnb}|${vehicule.vehiculeParameters.baseConsPer100Km}|${gearRatioForSpeed(vehicule.speed, vehicule.vehiculeParameters.maxSpeed)}`);
    
  }
  // End of the route
};
