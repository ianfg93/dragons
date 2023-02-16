import Race from './Race';

class Elf extends Race {
  private _maxLifePoints = 99;
  static instancia = 0;

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    Elf.instancia += 1;
    return Elf.instancia;
  }
}

export default Elf;