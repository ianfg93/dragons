import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints = 80;
  static instancia = 0;

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    Dwarf.instancia += 1;
    return Dwarf.instancia;
  }
}

export default Dwarf;
