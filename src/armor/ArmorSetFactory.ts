import Nome from "../Nome";
import setFactory from "../SetFactory";
import ArmorName from "./ArmorName";

export default class ArmorSetFactory implements setFactory {
  getNome(): Nome {
    const nomeArmadura = new ArmorName();
    return nomeArmadura;
  }
}
