import { GeneralParametersConfig, VehiculeParametersConfig } from "../configType";
import { Vehicule, VehiculeParametersType } from "../Vehicule/Vehicule";

const useVehiculeParameterOrDefault = (vehiculeParameters: VehiculeParametersConfig | undefined, vehiculeDefaultParameters : VehiculeParametersConfig | undefined) : VehiculeParametersType => {

  // find if the parameter name is in the vehicule parameters if not use the default one without string indexing
  if(!vehiculeParameters && !vehiculeDefaultParameters)
    throw new Error("vehiculeParameters is undefined and vehiculeDefaultParameters is undefined");
  let result : VehiculeParametersConfig = {}
  if (vehiculeDefaultParameters) {
    for (const key in vehiculeDefaultParameters) {
      result[key] = vehiculeDefaultParameters[key];
    }
  }
  if (vehiculeParameters) {
    for (const key in vehiculeParameters) {
      result[key] = vehiculeParameters[key];
    }
  }
  // console.log(result.protocol, vehiculeParameters, vehiculeDefaultParameters)
  return result as VehiculeParametersType;
};

export default useVehiculeParameterOrDefault;