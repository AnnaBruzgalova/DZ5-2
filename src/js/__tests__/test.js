/* eslint-disable no-new */
// eslint-disable-next-line no-unused-vars, import/extensions
import { Character } from '../Character';
import { Bowerman, bowerman } from '../Bowerman';
import { Daemon, daemon } from '../Daemon';
import { Magician, magician } from '../Magician';
import { Swordsman, swordsman } from '../Swordsman';
import { Undead, undead } from '../Undead';
import { Zombie, zombie } from '../Zombie';

test('name-bowerman', () => {
  expect(typeof bowerman.name).toBe('string');
});
test('name-bowerman-error', () => {
  const t = () => {
    new Bowerman('В', 'Bowman', 100, 1, 25, 25);
  };
  expect(t).toThrow('Некорректное значение "name"!');
});
test('type-bowerman', () => {
  expect(typeof bowerman.type).toBe('string');
});
test('type-bowerman-error', () => {
  const t = () => {
    new Bowerman('Анна', 2, 100, 1, 25, 25);
  };
  expect(t).toThrow('Некорректное значение "type"!');
});

test('name-daemon', () => {
  expect(typeof daemon.name).toBe('string');
});
test('name-daemon-error', () => {
  const t = () => {
    new Daemon('В', 'Daemon', 100, 1, 10, 40);
  };
  expect(t).toThrow('Некорректное значение "name"!');
});
test('type-daemon', () => {
  expect(typeof daemon.type).toBe('string');
});
test('type-daemon-error', () => {
  const t = () => {
    new Daemon('Анна', 2, 100, 1, 10, 40);
  };
  expect(t).toThrow('Некорректное значение "type"!');
});

test('name-magician', () => {
  expect(typeof magician.name).toBe('string');
});
test('name-magician-error', () => {
  const t = () => {
    new Magician('В', 'Magician', 100, 1, 10, 40);
  };
  expect(t).toThrow('Некорректное значение "name"!');
});
test('type-magician', () => {
  expect(typeof magician.type).toBe('string');
});
test('type-magician-error', () => {
  const t = () => {
    new Magician('Анна', 2, 100, 1, 10, 40);
  };
  expect(t).toThrow('Некорректное значение "type"!');
});

test('name-swordsman', () => {
  expect(typeof swordsman.name).toBe('string');
});
test('name-swordsman-error', () => {
  const t = () => {
    new Swordsman('В', 'Swordsman', 100, 1, 40, 10);
  };
  expect(t).toThrow('Некорректное значение "name"!');
});
test('type-swordsman', () => {
  expect(typeof swordsman.type).toBe('string');
});
test('type-swordsman-error', () => {
  const t = () => {
    new Swordsman('Анна', 2, 100, 1, 40, 10);
  };
  expect(t).toThrow('Некорректное значение "type"!');
});

test('name-undead', () => {
  expect(typeof undead.name).toBe('string');
});
test('name-undead-error', () => {
  const t = () => {
    new Undead('В', 'Undead', 100, 1, 25, 25);
  };
  expect(t).toThrow('Некорректное значение "name"!');
});
test('type-undead', () => {
  expect(typeof undead.type).toBe('string');
});
test('type-undead-error', () => {
  const t = () => {
    new Undead('Анна', 2, 100, 1, 25, 25);
  };
  expect(t).toThrow('Некорректное значение "type"!');
});

test('name-zombie', () => {
  expect(typeof zombie.name).toBe('string');
});
test('name-zombie-error', () => {
  const t = () => {
    new Zombie('В', 'Undead', 100, 1, 40, 10);
  };
  expect(t).toThrow('Некорректное значение "name"!');
});
test('type-zombie', () => {
  expect(typeof zombie.type).toBe('string');
});
test('type-zombie-error', () => {
  const t = () => {
    new Zombie('Анна', 2, 100, 1, 40, 10);
  };
  expect(t).toThrow('Некорректное значение "type"!');
});

// 2-ая задача:
test('levelUp-bowerman', () => {
  // eslint-disable-next-line func-names
  const func = (function () {
    const value = new Bowerman('Анна', 'Bowman', 100, 1, 25, 25);
    value.levelUp();
    return value;
  }());
  const result = new Bowerman('Анна', 'Bowman', 100, 2, 30, 30);
  expect(func).toEqual(result);
});

test('damage-bowerman', () => {
  // eslint-disable-next-line func-names
  const func = (function () {
    const value = new Bowerman('Анна', 'Bowman', 100, 1, 25, 25);
    value.damage(10);
    return value;
  }());
  const result = new Bowerman('Анна', 'Bowman', 92.5, 1, 25, 25);
  expect(func).toEqual(result);
});

test('health-levelUp-bowerman-error', () => {
  const func = () => {
    const value = new Bowerman('Анна', 'Bowman', 0, 1, 25, 25);
    value.levelUp();
  };
  expect(func).toThrow('Нельзя повысить лвл умершего!');
});

test('health-damage-bowerman-error', () => {
  const func = () => {
    const value = new Bowerman('Анна', 'Bowman', -5, 1, 25, 25);
    value.damage(10);
  };
  expect(func).toThrow('Ваш персонаж умер!');
});
