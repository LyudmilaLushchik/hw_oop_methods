import Bowerman from '../bowerman';

beforeEach(() => {
  jest.resetAllMocks();
});

test('should create bowerman', () => {
  const expected = {
    name: 'John',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const result = new Bowerman('John', 'Bowman');
  expect(result).toEqual(expected);
});

test('should throw error if no health bowerman', () => {
  const bowman = new Bowerman('Li', 'Bowman');
  bowman.health = 0;
  expect(() => bowman.levelUp()).toThrowError('Нельзя повысить левел умершего.');
});

test('should raise level, attack, defence of the bowerman', () => {
  const expected = {
    name: 'Li',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  const bowman = new Bowerman('Li', 'Bowman');
  bowman.levelUp();
  expect(bowman).toEqual(expected);
});

test('should take damage bowerman', () => {
  const expected = {
    name: 'Li',
    type: 'Bowman',
    health: 62.5,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const bowman = new Bowerman('Li', 'Bowman');
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
  const bowman = new Bowerman('Li', 'Bowman');
  bowman.health = 0;
  bowman.damage(50);
  expect(bowman).toEqual(expected);
});
