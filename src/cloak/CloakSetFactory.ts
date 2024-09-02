import Nome from "../Nome";
import setFactory from "../SetFactory";
import CloakName from "./CloakName";

export default class CloakSetFactory implements setFactory {
  getNome(): Nome {
    const nomeCapa = new CloakName();
    return nomeCapa;
  }
}
