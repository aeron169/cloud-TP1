export interface Config {
  mqtt: MqttConfig;
  companies: {
    [key: string]: CompanyConfig;
  };
  frames: FramesConfig;
}

export interface MqttConfig {
  url: string;
  topic: string;
}

export interface FramesConfig {
  latency: number;
  numberOfFramesLoopsToGenerate: number | "infinite";
}

export interface CompanyConfig {
  vehicules:  VehiculesIdConfig;
  parameters: ParametersConfig;
}
export interface VehiculesIdConfig {
  [key: string]: string[];
}

export interface ParametersConfig {
  vehiculesDefaultParameters?: VehiculeParametersConfig;
  vehiculeParametersByType?: {
    [key: string]: VehiculeParametersConfig;
  };
}

export interface GeneralParametersConfig {
  vehiculesDefaultParameters?: VehiculeParametersConfig;
}

export interface VehiculeParametersConfig {
  maxCapacity?: number;
  nbrOfStops?: number;
  maxSpeed?: number;
  protocol?:   string;
  baseConsPer100Km?: number;
  latencyBetweenFrames?: number;
  numberOfFrameLoops?: number | "infinite";
  [key: string]: number | string | undefined;
}
