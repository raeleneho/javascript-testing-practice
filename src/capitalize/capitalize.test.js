import capitalize from './capitalize'

// it('Capitalize', () => {
//     expect(capitalize('hello world')).toBe('Hello world')
// })
test('capitalizes the first letter of a word', () => {
  expect(capitalize('hello')).toBe('Hello');
});