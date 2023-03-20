import { Vehicule } from "../Vehicule";
import { alstomProtocol } from "./alstomProtocol";
import { generalProtocol } from "./generalProtocol";

const useProtocol = (protocolToUse: string, client: any, topic: string, vehicule: Vehicule) => {
  
  // Choose beetwen generalProtocol or alstomProtocol
  const choosedProtocol = protocolToUse === "generalProtocol" ? generalProtocol : alstomProtocol;
  choosedProtocol(client, topic, vehicule);
}


export default useProtocol;
export { alstomProtocol, generalProtocol}
