import AddToListButton from '../addToListButton';

test('mock', () => {
  const mock = jest.fn();

  mock(AddToListButton)

  expect(mock).toHaveBeenCalledTimes(1);
});