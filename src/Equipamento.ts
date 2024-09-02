import Nome from "./Nome";
import setFactory from "./SetFactory";

export default class Equipamento {
  protected nome: Nome;

  constructor(factory: setFactory) {
    this.nome = factory.getNome();
  }

  getNome(): string {
    return this.nome.getNome();
  }
}
