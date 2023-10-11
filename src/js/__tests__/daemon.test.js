import Daemon from '../daemon';

beforeEach(() => {
  jest.resetAllMocks();
});

test('should create daemon', () => {
  const expected = {
    name: 'John',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const result = new Daemon('John', 'Daemon');
  expect(result).toEqual(expected);
});
