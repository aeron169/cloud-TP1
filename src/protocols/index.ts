import { Vehicule } from "../Vehicule";
import { alstomProtocol } from "./alstomProtocol";
import { generalProtocol } from "./generalProtocol";

const useProtocol = async (protocolToUse: string, client: any, topic: string, vehicule: Vehicule) => {
  // Choose beetwen generalProtocol or alstomProtocol
  console.log(vehicule);
  const choosedProtocol = protocolToUse === "generalProtocol" ? generalProtocol : alstomProtocol;
  if (vehicule.vehiculeParameters.numberOfFrameLoops === 'infinite')
    while(true) {
      await choosedProtocol(client, topic, vehicule);
    }
  else
    for (let i = 0; i < vehicule.vehiculeParameters.numberOfFrameLoops; i++) {
      // Call the choosed protocol
      await choosedProtocol(client, topic, vehicule);
    }
}


export default useProtocol;
export { alstomProtocol, generalProtocol}
