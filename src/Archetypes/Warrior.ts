import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private _EnergyType: EnergyType = 'stamina';
  static instancia = 0;

  get energyType(): EnergyType {
    return this._EnergyType;
  }

  static createdArchetypeInstances(): number {
    Warrior.instancia += 1;
    return Warrior.instancia;
  }
}

export default Warrior;