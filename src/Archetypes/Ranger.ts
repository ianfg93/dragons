import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _EnergyType: EnergyType = 'stamina';
  static instancia = 0;

  get energyType(): EnergyType {
    return this._EnergyType;
  }

  static createdArchetypeInstances(): number {
    Ranger.instancia += 1;
    return Ranger.instancia;
  }
}

export default Ranger;