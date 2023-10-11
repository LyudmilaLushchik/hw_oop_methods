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
    attack: 24,
    defence: 24,
  };
  const bowman = new Character('Li', 'Bowman');
  bowman.levelUp();
  expect(bowman).toEqual(expected);
});

test('should take damage', () => {
  const expected = {
    name: 'Li',
    type: 'Bowman',
    health: 60,
    level: 1,
    attack: 20,
    defence: 20,
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
    attack: 20,
    defence: 20,
  };
  const bowman = new Character('Li', 'Bowman');
  bowman.health = 0;
  bowman.damage(50);
  expect(bowman).toEqual(expected);
});
