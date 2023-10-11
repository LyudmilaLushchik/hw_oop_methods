import Swordsman from '../swordsman';

beforeEach(() => {
  jest.resetAllMocks();
});

test('should create swordsman', () => {
  const expected = {
    name: 'John',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const result = new Swordsman('John', 'Swordsman');
  expect(result).toEqual(expected);
});
