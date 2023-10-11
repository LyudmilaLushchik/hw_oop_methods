import Magician from '../magician';

beforeEach(() => {
  jest.resetAllMocks();
});

test('should create magician', () => {
  const expected = {
    name: 'John',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const result = new Magician('John', 'Magician');
  expect(result).toEqual(expected);
});
