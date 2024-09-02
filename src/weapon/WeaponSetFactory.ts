import Nome from "../Nome";
import setFactory from "../SetFactory";
import WeaponName from "./WeaponName";

export default class WeaponSetFactory implements setFactory {
  getNome(): Nome {
    return new WeaponName();
  }
}
