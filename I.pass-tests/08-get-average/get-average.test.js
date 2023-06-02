const getAverage = require("./get-average");

describe('Given the getAverage function', () => {
  test('Given the input [4, "-", 8, 11, "hello", "57", 0, 2] it should return 5 and keep the original one', () => {
    const numbers = [4, "-", 8, 11, "hello", "57", 0, 2];
    const unchanged = [4, "-", 8, 11, "hello", "57", 0, 2];
    const expected = 5;
  
    const output = getAverage(numbers);
  
    expect(output).toEqual(expected);
    expect(numbers).toEqual(unchanged);
  });

  test('Given the input ["test", "text", "fail"] show throw an error', () => {
    const input = ['test', 'text', 'fail'];
    expect( () => getAverage( input ) ).toThrow('invalid input');
  })

  test('Given the input 200 should return 200 and keep the original one', () => {
    const number = 200;
    const unchanged = 200;
    const expected = 200;

    const output = getAverage( number );

    expect(output).toEqual(expected);
    expect(number).toEqual(unchanged);
  })

  test('Given the input "test" it should throw an error', () => {
    const input = 'test';
    expect( () => getAverage( input ) ).toThrow('invalid input');
  })

  test('Given the input undefined it should throw an error', () => {
    const input = undefined;
    expect( () => getAverage( input ) ).toThrow('invalid input');
  })

  test('Given the input null it should throw an error', () => {
    const input = null;
    expect( () => getAverage( input ) ).toThrow('invalid input');
  })
})
