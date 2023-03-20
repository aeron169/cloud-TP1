import { Config,  } from "./configType";
import { 
  generateVehicule, 
  Vehicule
} from "./Vehicule";

const mqttPackage = require('mqtt')
const config : Config = require('../config');

const { companies, mqtt } = config;
const client  = mqttPackage.connect(mqtt.url);


const generateSImulation = async () => {
  console.log("BEGGINING OF THE PROGRAM")

  if(!config) throw new Error("The config file is empty");

  let availableVehicules : Vehicule[] = [];

  // use object.entries to loop through the companiesConfig object and get their keys wich is a company name and their values in a map
  for(const [companyName, companyConfig] of Object.entries(companies)) {
    const companyVehicles = companyConfig?.vehicules;
    
    if(!companyVehicles) throw new Error("No vehicules for the company " + companyName + " in the config file");
    
    availableVehicules = availableVehicules.concat(generateVehicule(companyName ,companyConfig.vehicules, companyConfig.parameters));
  }
  while(availableVehicules.length > 0) {
    // generate a random index between 0 and the length of the availableVehicules array
    const index = Math.floor(Math.random() * availableVehicules.length);

    // get the vehicule at the index and remove it from the array
    const vehicule = availableVehicules[index];
    availableVehicules.splice(index, 1);

    // generate the frames and send them to the broker
    vehicule.sendInfo(client, mqtt.topic);
  }
  // wait for the while loop to finish

}

const main = async () => {
  try {
    await generateSImulation();
  } catch (error) {
    console.log("An error have been thrown in the program: ", error);
    // exit the program with an error code
    process.exit(1);
  }
}

main();

// CONSUMER Program
client.subscribe(mqtt.topic)

client.on('message', function (topic : any, message : any) {
  // message is Buffer
  console.log(message.toString())
})

// handle connection errors
client.on('error', (err: any) => {
  console.log('Connection Error', err)
  client.end()
})

