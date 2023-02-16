import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints = 60;
  static instancia = 0;

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    Halfling.instancia += 1;
    return Halfling.instancia;
  }
}

export default Halfling;