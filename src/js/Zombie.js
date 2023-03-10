import { Character } from './Character';

export class Zombie extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, health, level);
        this.type = (function func() {
            if (typeof type === 'string') {
                return type;
            }
            throw new Error('Некорректное значение "type"!');
        }());
        this.attack = attack;
        this.defence = defence;
    }
}
export const zombie = new Zombie('Анна', 'Zombie', 100, 1, 40, 10);