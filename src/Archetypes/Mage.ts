import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _EnergyType: EnergyType = 'mana';
  static instancia = 0;

  get energyType(): EnergyType {
    return this._EnergyType;
  }

  static createdArchetypeInstances(): number {
    Mage.instancia += 1;
    return Mage.instancia;
  }
}

export default Mage;