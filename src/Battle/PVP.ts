import Battle from './Battle';
import Fighter from '../Fighter';

class PVP extends Battle {
  constructor(
    private _fighter1: Fighter,
    private _fighter2: Fighter,
  ) {
    super(_fighter1);
  }

  fight(): number {
    if (this._fighter1.lifePoints < 0
      || this._fighter2.lifePoints < 0) this._fighter1.attack(this._fighter2);
    this._fighter2.attack(this._fighter1);

    return super.fight();
  }
}

export default PVP;