import { VehiculeParametersConfig } from "../configType";
import useProtocol, { alstomProtocol , generalProtocol } from "../protocols";
import { useVehiculeParameterOrDefault } from "../utils";

export interface VehiculeType {
  vin: string,
  type: string,
  company: string,
  
  speed: number,
  pnb: number,
  location: {
    lat: number,
    lng: number
  },
  vehiculeParameters: VehiculeParametersType,
  sendInfo(client: any, topic : string, latencyBetweenFrame: number): void,
};

export interface VehiculeParametersType {
  nbrOfStops: number,
  maxCapacity: number,
  maxSpeed: number,
  protocol: string,
  baseConsPer100Km: number,
  latencyBetweenFrames: number,
  numberOfFrameLoops: number | "infinite",
}


/**
 * The vehicule class
 * constructor takes the vehicule parameters and then the default parameters for every vehicules of the company from the config file,
 * so when the vehicule have a missing parameter it will use the default one and if the default one is missing too it will throw an error
 */
export class Vehicule implements VehiculeType {
  vin;
  type;
  company;
  speed = 0;
  pnb = 0;
  location = {
    lat: 0,
    lng: 0
  };

  vehiculeParameters;
  sendInfo(client: any, topic : string) {
    useProtocol(this.vehiculeParameters.protocol, client, topic, this);
  }

  constructor(vin: string, type: string, company: string, vehiculeParameters?: VehiculeParametersConfig, vehiculesDefaultParameters?: VehiculeParametersConfig) {
    this.vin = vin;
    this.type = type;
    this.company = company;
    this.vehiculeParameters = useVehiculeParameterOrDefault(vehiculeParameters, vehiculesDefaultParameters);
    
    if(!this.vehiculeParameters)
      throw new Error("The vehiculeParameters is undefined for this type of vehicule : " + this.type);
    if(!this.vehiculeParameters.protocol)
      throw new Error("The protocol is missing for the type of vehicule : " + this.type);
    if(!this.vehiculeParameters.maxCapacity)
      throw new Error("The MaxCapacity is missing for the type of vehicule : " + this.type);
    if(!this.vehiculeParameters.maxSpeed)
      throw new Error("The MaxSpeed is missing for the type of vehicule : " + this.type);
    if(!this.vehiculeParameters.nbrOfStops)
      throw new Error("The nbrOfStops is missing for the type of vehicule : " + this.type);
    if(!this.vehiculeParameters.baseConsPer100Km)
      throw new Error("The baseConsPer100Km is missing for the type of vehicule : " + this.type);
    if(!this.vehiculeParameters.latencyBetweenFrames)
      throw new Error("The latencyBetweenFrames is missing for the type of vehicule : " + this.type);
    if(!this.vehiculeParameters.numberOfFrameLoops)
      throw new Error("The numberOfFrameLoops is missing for the type of vehicule : " + this.type);
  }
};