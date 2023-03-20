# Config File Documentation  📝

|[readme.md](./readme.md)|config Documentation| [explanations](./explanations.md)|
|---|---|---|


This documentation **provides details** about the structure of the configuration file used in this project.

## JSON Structure
The configuration file is in the **JSON format** and has the following structure:
```
{
  "mqtt": {
    "url": "<string>",
    "topic": "<string>"
  },
  "companies": {
    "<company_name>": {
      "vehicules": {
        "<vehicle_type>": [
          "<vehicle_id>",
          ...
        ]
      },
      "parameters": {
        "vehiculesDefaultParameters": {
          "maxSpeed": "<number>",
          "maxCapacity": "<number>",
          "nbrOfStops": "<number>",
          "protocol": "<string>",
          "baseConsPer100Km": "<number>",
          "latencyBetweenFrames": "<number>",
          "numberOfFrameLoops": "<number> | 'infinite'"
        },
        "vehiculeParametersByType": {
          "<vehicle_type>": {
            "nbrOfStops": "<number>",
            "MaxCapacity": "<number>",
            "maxSpeed": "<number>",
            "protocol": "<string>",
            "baseConsPer100Km": "<number>",
            "latencyBetweenFrames": "<number>",
            "numberOfFrameLoops": "<number> | 'infinite'"
          },
          ...
        }
      }
    },
    ...
  }
}
```
## JSON Properties 🔍
The configuration file has the following properties:

The property names inside "<>" indicate the name of the property in the JSON structure. 

For example, **<company_name>** is the name of the property that **contains the details** for a **specific company**. 
Similarly, <vehicle_type> is the name of the property that contains the type of the vehicle, and <vehicle_id> is the name of the property that contains the unique identifier for a particular vehicle.

When using the configuration file, it's important to use the correct property names in order to access the values that are stored in the JSON structure. Using incorrect property names may result in errors or unexpected behavior.

### mqtt  🔌
This property is an object that contains the configuration details for the **MQTT protocol**.

| Property | Type | Description |
|----------|------|-------------|
url|string|The URL of the MQTT broker.
topic|string|The topic for publishing data.

### companies 👥
This property is an object that contains the configuration details for **each company**.

|Property|Type|Description|
|--------|----|------------|
<company_name>|object|An object containing the details for a specific company.|
vehicules|	object	|An object containing the vehicle types and their respective IDs.|
parameters|object|An object containing the parameters for the company's vehicles.|

### vehicules 🚗
This property is an object that contains the c**onfiguration details** for the **vehicles of a company**.

|Property|Type|Description|
|--------|----|-----------|
<vehicle_type>|array of strings|An array containing the VINs of the vehicles of the given type.|


### parameters ⚙️
This property is an object that contains the default and custom parameters for a company's vehicles.

|Property|Type|Description|
|--------|----|-----------|
vehiculesDefaultParameters|object|An object containing the default parameters for a company's vehicles.|
vehiculeParametersByType|object|An object containing the custom parameters for a company's vehicles, grouped by vehicle type.|

### vehiculesDefaultParameters And VehiculeParameterByType  🚦

These property Contains the parameters for each type of vehicules, If vehiculeParameterByType miss a property it will be replaced by the default one, if both not define it will throw an error

⚠️ <b>Warning</b>: VehiculeParameterByType encapsulate the properties below by Type of vehicules **not like** vehiculesDefaultParameters

|Property|Type|Description|
|---|---|---|
maxSpeed|number|The maximum speed of a vehicle.|
maxCapacity|number|The maximum capacity of a vehicle.|
nbrOfStops|number|The number of stops a vehicle makes.|
protocol|string|The communication protocol used by a vehicle.
baseConsPer100Km|number|The base consumption
