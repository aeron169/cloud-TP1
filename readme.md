# Simulate Toulouse's Vehicules Route
This is a Node.js application that generates random (not so) routes for Tisseo vehicules and sends them to a message broker. It uses the MQTT protocol to communicate with the broker.

## Requirements
Node.js
MQTT Broker (with default settings)

## Installation and Usage
To use this application, follow these steps:

#### 1. Clone the repository

```sh
git clone https://github.com/your_username/cloud-TP1.git
```

#### 2. Navigate to the project directory and install dependencies

```sh
cd tisseo-vehicule-route-generator
npm install
```

#### 3. Configure the application by editing the config file as necessary.

#### 4. Start the application by running the following command:
```sh
npm start
# This will generate random routes for each of the available vehicules and send them to the message broker.
```

 :warning: <b>Note:</b> This application requires Node.js and an MQTT broker with default settings to be installed on the system.

## Configuration
The configuration file is a JSON file located at the root of the repository. It contains the following properties:

- mqtt: Information about the MQTT broker.
   - url: The URL of the MQTT broker.
   - topic: The topic to which messages will be sent.
- companies: Information about the available companies.
  - {company_name}: Information about a specific company.
    - vehicules: Information about the available vehicles for this company.
          - {vehicle_type}: An array of vehicle VINs for this vehicle type.
   - parameters: Information about the parameters for the vehicles of this company.
     - vehiculesDefaultParameters: Default parameters for all vehicles.
     - vehiculeParametersByType: Parameters for specific vehicle types.


Refer to the documentation for more information on how to write the configuration file.
