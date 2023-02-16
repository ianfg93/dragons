import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _EnergyType: EnergyType = 'mana';
  static instancia = 0;

  get energyType(): EnergyType {
    return this._EnergyType;
  }

  static createdArchetypeInstances(): number {
    Necromancer.instancia += 1;
    return Necromancer.instancia;
  }
}

export default Necromancer;