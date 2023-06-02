var addOne = require("./add-one.js");

describe('Given the addOneFunction', () => {
  test('for the input [31, 57, 12, 5] it should return [32, 58, 13, 6] and keep the original one', () => {
    //Arrange
    const myArray = [31, 57, 12, 5];
    const unchanged = [31, 57, 12, 5];
    const expected = [32, 58, 13, 6];

    //Act
    const output = addOne(myArray);

    // Assert
    expect(output).toEqual(expected);
    expect(myArray).toEqual(unchanged);
  })

  test('for the input [] it will return [] and keep the original one', () => {
    //Arrange
    const myArray = [];
    const unchanged = [];
    const expected = [];

    //Act
    const output = addOne(myArray);

    // Assert
    expect(output).toEqual(expected);
    expect(myArray).toEqual(unchanged);
  })

  test('for the input ["1", "2"] it will throw an error', () => {
    //Arrange
    const invalidArray = ['1', '2'];

    // Act and assert
    expect( () => addOne( invalidArray ) ).toThrow('invalid input');
  })

  test('for the input null it will throw an error', () => {

    const invalidInput = null;

    expect( () => addOne( invalidInput) ).toThrow('invalid input');
  })

  test('for the input undefined it will throw an error', () => {
    const invalidInput = undefined;

    expect( () => addOne( invalidInput) ).toThrow('invalid input');
  })
})
