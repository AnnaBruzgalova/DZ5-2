import { Character } from './Character';

export class Daemon extends Character {
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
export const daemon = new Daemon('Анна', 'Daemon', 100, 1, 10, 40);