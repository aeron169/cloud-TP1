import { Vehicule } from "../Vehicule/Vehicule";
import { generateRandomNumberBeetweenRange, delay, generateRandomPoint } from "../utils";

const MSG_TYPE = {
  "start": 14,
  "end": 15,
  "speed": 56,
  "stopSTation": 75,
  "nbrPassengers": 125,
};

export const alstomProtocol = async (client: any, topic: string, vehicule: Vehicule) => {
  
  const rangeOfPnb: [min: number, max: number] = [0, vehicule.vehiculeParameters.maxCapacity];
  const rangeOfSpeed: [min: number, max: number] = [0, vehicule.vehiculeParameters.maxSpeed];
  const nbrOfStops = vehicule.vehiculeParameters.nbrOfStops;
  
  // starting point
  client.publish(topic, `id=${vehicule.vin};msg=${MSG_TYPE.start};ts=${Date.now()}`);

  // Number of passengers at start
  client.publish(topic, `id=${vehicule.vin};msg=${MSG_TYPE.nbrPassengers};ts=${Date.now()};pnb=0`);

  // Loop to simulate the stops
  for (let i = 0; i < nbrOfStops; i++) {
    await delay(vehicule.vehiculeParameters.latencyBetweenFrames);
    vehicule.speed = generateRandomNumberBeetweenRange(rangeOfSpeed);
    vehicule.pnb = generateRandomNumberBeetweenRange(rangeOfPnb);
    vehicule.location = generateRandomPoint({lat: 43.604652, lng: 1.444209}, 10000);
    // send speed information
    client.publish(topic, `id=${vehicule.vin};msg=${MSG_TYPE.speed};ts=${Date.now()};spd=${vehicule.speed}`);
    // Stop station
    client.publish(topic, `id=${vehicule.vin};msg=${MSG_TYPE.stopSTation};ts=${Date.now()};stop=${vehicule.location.lat},${vehicule.location.lng}`);
    // Number of passengers
    client.publish(topic, `id=${vehicule.vin};msg=${MSG_TYPE.nbrPassengers};ts=${Date.now()};pnb=${generateRandomNumberBeetweenRange(rangeOfPnb)}`);
  }
  delay(vehicule.vehiculeParameters.latencyBetweenFrames);
  client.publish(topic, `id=${vehicule.vin};msg=${MSG_TYPE.nbrPassengers};ts=${Date.now()};pnb=0`);
  client.publish(topic, `id=${vehicule.vin};msg=${MSG_TYPE.end};ts=${Date.now()}`);
  // End of the route
};
