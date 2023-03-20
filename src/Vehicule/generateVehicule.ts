import { ParametersConfig, VehiculesIdConfig } from "../configType";
import { Vehicule, VehiculeType } from "./Vehicule";

/**
 * Extracts all VIN strings and their associated vehicle type and parameters from a configuration object
 * And then creates a Vehicule instance for each VIN string
 * 
 * Note: I've made this because i wanted the config file to be more concise and easier to read and edit
 *
 * @param availableVehicules - The availableVehicules array containing a VIN string linked to their vehicle type and to their company name and parameters
 * @returns An array of objects with the VIN string and its associated vehicle type
 */
export function generateVehicule(companyName: string, vehiculesId: VehiculesIdConfig, companyParameters: ParametersConfig): any[] {
  const result: VehiculeType[] = [];
  const { vehiculesDefaultParameters, vehiculeParametersByType } = companyParameters;

  // Loop through each key-vins pair in the input object
  //  example: for the metro, the key-vins pairs are metro: [vin1, vin2, vin3]
  Object.entries(vehiculesId).forEach(([transport, vins]) => {
    // Loop through each VIN string in the current transport array
    vins.forEach((vin: string) => {
      // If parameters is defined cast it to a VehiculeParametersConfig object
      let vehiculeParameters;
      if (vehiculeParametersByType)
        vehiculeParameters = vehiculeParametersByType[transport];
      else
        vehiculeParameters = undefined;
      const newVehicule = new Vehicule(vin, transport, companyName, vehiculeParameters, vehiculesDefaultParameters);
      // Create an object with the VIN string and its associated transport type, and add it to the result array
      result.push(newVehicule);
    });
  });


  return result;
}
