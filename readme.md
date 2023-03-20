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
A configuration file is needed for this application and should be at the root of the repo. The file contains information about the available vehicules and their parameters, you can see how to write this file in the documentation of it.
