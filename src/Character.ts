import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

const generateNumber = getRandomInt(1, 10);

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._dexterity = generateNumber;
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = (this._race.maxLifePoints / 2);
    this._lifePoints = this._maxLifePoints;
    this._strength = generateNumber;
    this._defense = generateNumber;
    this._energy = { type_: this._archetype.energyType,
    amount: generateNumber },
};

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints
  }

  get strength(): number {
    return this._strength
  }

  get defense(): number {
    return this._defense
  }

  get dexterity(): number{
    return this._dexterity
  }

  get energy(): Energy {
    return { ...this._energy }
  }

  receiveDamage(attackPoints: number): number {
    const damage = this._defense - attackPoints;
    if (damage > 0) {
      return this._lifePoints -= damage
    } else {
      return this._lifePoints -= 1
    }
    if (this._lifePoints <= 0) {
      return this._lifePoints = -1;
    } return this._lifePoints;
  }

    
  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }
 
  levelUp(): void {
    this._maxLifePoints += generateNumber;
    this._strength += generateNumber;
    this._dexterity += generateNumber;
    this._defense += generateNumber
    this._energy.amount = 10;

    if(this._maxLifePoints > this._race.maxLifePoints){
      this._maxLifePoints = this._race.maxLifePoints
    }
    
    this._lifePoints = this._maxLifePoints;
  }

  special?(enemy: Fighter): void {
    throw new Error('Method not implemented.');
  }

}

export default Character;