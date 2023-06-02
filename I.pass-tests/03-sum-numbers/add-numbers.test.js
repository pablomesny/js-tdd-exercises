const addNumbers = require("./add-numbers");
const addAllnumbers = require("./add-numbers");

describe('Given the addNumbers function', () => {
  test("Given the input [9, 23, 10, 3, 8] should return 53 and keep the original one", function() {
    const numbers = [9, 23, 10, 3, 8];
    const unchanged = [9, 23, 10, 3, 8];
    const expected = 53;
  
    const output = addAllnumbers(numbers);
  
    expect(output).toEqual(expected);
    expect( numbers ).toEqual( unchanged );
  });

  test("Given the input 10 should return 10 and keep the original one", function() {
    const input = 10;
    const unchanged = 10;
    const expected = 10;
  
    const output = addAllnumbers(input);
  
    expect(output).toEqual( expected );
    expect( input ).toEqual( unchanged );
  });

  test('Given the input "test" should throw an error', function() {
    const input = 'test';
    expect( () => addNumbers( input ) ).toThrow('invalid input');
  });

  test("Given the input ['hola mundo', 'test'] should throw an error", function() {
    const input = ['hola mundo', 'test'];  
  
    expect( () => addNumbers(input) ).toThrow( 'invalid input' );
  });

  test("Given the input undefined should throw an error", function() {
    const input = undefined;  
  
    expect( () => addNumbers(input) ).toThrow( 'invalid input' );
  });

  test("Given the input null should throw an error", function() {
    const input = null;  
  
    expect( () => addNumbers(input) ).toThrow( 'invalid input' );
  });

  test("Given a function input should throw an error", function() {
    const input = () => {};  
  
    expect( () => addNumbers(input) ).toThrow( 'invalid input' );
  });

})
