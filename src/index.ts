import ArmorSetFactory from "./armor/ArmorSetFactory";
import CloakSetFactory from "./cloak/CloakSetFactory";
import WeaponSetFactory from "./weapon/WeaponSetFactory";
import Equipamento from "./Equipamento";

console.log("-------------------------------");

const weaponFactory = new WeaponSetFactory();
const weapon = new Equipamento(weaponFactory);
console.log("| Arma Gerada >", weapon.getNome());

console.log("-------------------------------");

const cloakFactory = new CloakSetFactory();
const cloak = new Equipamento(cloakFactory);
console.log("| Capa Gerada >", cloak.getNome());

console.log("-------------------------------");

const armorFactory = new ArmorSetFactory();
const armor = new Equipamento(armorFactory);
console.log("| Armadura Gerada >", armor.getNome());

console.log("-------------------------------");
