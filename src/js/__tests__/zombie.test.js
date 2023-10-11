import Zombie from '../zombie';

beforeEach(() => {
  jest.resetAllMocks();
});

test('should create zombie', () => {
  const expected = {
    name: 'John',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const result = new Zombie('John', 'Zombie');
  expect(result).toEqual(expected);
});
