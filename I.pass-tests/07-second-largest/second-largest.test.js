const secondLargest = require("./second-largest");

describe('Given the secondLargest function', () => {
  test('Given the array [2, 0, 23, 0, 57, 1, 230]should return 57 and keep the original one', () => {
    const numbers = [2, 0, 23, 0, 57, 1, 230];
    const unchanged = [2, 0, 23, 0, 57, 1, 230];
    const expected = 57;

    const output = secondLargest(numbers);
  
    expect(output).toEqual(expected);
    expect(numbers).toEqual(unchanged);
  });

  test('Given the array [2,1] should return 1 and keep the original one', () => {
    const numbers = [2, 1];
    const unchanged = [2, 1];
    const expected = 1;

    const output = secondLargest(numbers);

    expect(output).toEqual(expected);
    expect(numbers).toEqual(unchanged);
  })

  test('Given the array ["text", "string", "test"] should throw an error', () => {
    const input = ['text', 'string', 'test'];
    expect( () => secondLargest( input ) ).toThrow('invalid input');
  })

  test('Given the input 5 it should throw an error', () => {
    const input = 5;
    expect( () => secondLargest( input ) ).toThrow('invalid input');
  })

  test('Given no input it should return throw an error', () => {
    expect( () => secondLargest() ).toThrow('invalid input');
  })

  test('Given the input null it should throw an error', () => {
    const input = null;
    expect( () => secondLargest( input ) ).toThrow('invalid input');
  })

  test('Given the input undefined it should throw an error', () => {
    const input = undefined;
    expect( () => secondLargest( input ) ).toThrow('invalid input');
  })
})
