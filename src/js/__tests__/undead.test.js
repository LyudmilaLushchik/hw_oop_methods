import Undead from '../undead';

beforeEach(() => {
  jest.resetAllMocks();
});

test('should create undead', () => {
  const expected = {
    name: 'John',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const result = new Undead('John', 'Undead');
  expect(result).toEqual(expected);
});
