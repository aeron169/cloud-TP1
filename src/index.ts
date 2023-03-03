const config = require('../config')



const vehicules = config.tisseo.vehicules;
const parameters = config.tisseo.parameters;

type Vehicule = {
  vin: string,
  type: string
};

const generateRandomPassengerNumberBeetweenRange = (range : [min: number, max: number]) : number => {
  const [min, max] = range
  return Math.floor(Math.random() * (max - min) + min);
}

const generateRandomVehiculeTram = (vehicules : Vehicule[], parameters : any) => {
  const randomVehicule = vehicules[Math.floor(Math.random() * vehicules.length)];
  const vehiculeParameters = parameters[`${randomVehicule.type}`];
  const randomPassenger = generateRandomPassengerNumberBeetweenRange(vehiculeParameters.rangePnb)

  console.log("my random vehicule", randomVehicule);
  console.log("vehiculeParameters", vehiculeParameters);
  
  const result = `vin=${randomVehicule.vin}|msg=Undefined|pnb=${randomPassenger}`;
  console.log("result", result);
}

generateRandomVehiculeTram(vehicules, parameters)



