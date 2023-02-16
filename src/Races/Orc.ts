import Race from './Race';

class Orc extends Race {
  private _maxLifePoints = 74;
  static instancia = 0;

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    Orc.instancia += 1;
    return Orc.instancia;
  }
}

export default Orc;