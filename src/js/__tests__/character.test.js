import Character from '../character';

beforeEach(() => {
  jest.resetAllMocks();
});

test('should throw error if no name', () => {
  expect(() => new Character('', 'Bowman')).toThrowError('Имя должно содержать от 2 до 10 символов');
});

test('should throw error if name length is less than 2', () => {
  expect(() => new Character('A', 'Bowman')).toThrowError('Имя должно содержать от 2 до 10 символов');
});

test('should throw error if name length is more than 10', () => {
  expect(() => new Character('Abcdefghijk', 'Bowman')).toThrowError('Имя должно содержать от 2 до 10 символов');
});

test('should throw error if no type', () => {
  expect(() => new Character('John', '')).toThrowError('Некорректный тип персонажа');
});

test('should throw error if type is incorrect', () => {
  expect(() => new Character('John', 'B')).toThrowError('Некорректный тип персонажа');
});

test('should create character bowman', () => {
  const expected = {
    name: 'John',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const result = new Character('John', 'Bowman');
  expect(result).toEqual(expected);
});

test('should create character swordsman', () => {
  const expected = {
    name: 'John',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const result = new Character('John', 'Swordsman');
  expect(result).toEqual(expected);
});

test('should create character magician', () => {
  const expected = {
    name: 'John',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const result = new Character('John', 'Magician');
  expect(result).toEqual(expected);
});

test('should create character undead', () => {
  const expected = {
    name: 'John',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const result = new Character('John', 'Undead');
  expect(result).toEqual(expected);
});

test('should create character zombie', () => {
  const expected = {
    name: 'John',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const result = new Character('John', 'Zombie');
  expect(result).toEqual(expected);
});

test('should create character daemon', () => {
  const expected = {
    name: 'John',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const result = new Character('John', 'Daemon');
  expect(result).toEqual(expected);
});

test('should throw error if no health', () => {
  const bowman = new Character('Li', 'Bowman');
  bowman.health = 0;
  expect(() => bowman.levelUp()).toThrowError('Нельзя повысить левел умершего.');
});

test('should raise level, attack, defence', () => {
  const expected = {
    name: 'Li',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  const bowman = new Character('Li', 'Bowman');
  bowman.levelUp();
  expect(bowman).toEqual(expected);
});

test('should take damage', () => {
  const expected = {
    name: 'Li',
    type: 'Bowman',
    health: 62.5,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const bowman = new Character('Li', 'Bowman');
  bowman.damage(50);
  expect(bowman).toEqual(expected);
});

test('should remain 0 if health was 0 before damage', () => {
  const expected = {
    name: 'Li',
    type: 'Bowman',
    health: 0,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const bowman = new Character('Li', 'Bowman');
  bowman.health = 0;
  bowman.damage(50);
  expect(bowman).toEqual(expected);
});
