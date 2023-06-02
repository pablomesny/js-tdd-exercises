const wordLengths = require("./get-word-lengths");

describe('Given the getWordLengths function', () => {

  test('given the input ["sun", "potato", "roundabout", "pizza"] should return [3, 6, 10, 5] and keep the original one', () => {
    //Arrange
    const words = ["sun", "potato", "roundabout", "pizza"];
    const expected = [3, 6, 10, 5];
  
    //Act
    const output = wordLengths(words);

    //Assert
    expect(output).toEqual(expected);
  });

  test('for the input "sun" should return 3 and keep the original one', () => {
    // Arrange
    const myWord = 'sun';
    const unchanged = 'sun';
    const expected = 3;

    // Act
    const output = wordLengths(myWord);

    // Assert
    expect( output ).toBe( expected );
    expect( myWord ).toBe( unchanged );
  })
  
  test('for no input given should throw an error', () => {
    expect( () => wordLengths() ).toThrow('invalid input');
  })

  test('for the input null should throw an error', () => {

    const input = null;

    expect( () => wordLengths( input ) ).toThrow('invalid input');
  })

  test('for the input undefined should throw an error', () => {

    const input = undefined;

    expect( () => wordLengths( input ) ).toThrow('invalid input');
  })

  test('for the input 123 should throw an error', () => {
    const input = 123;

    expect( () => wordLengths( input ) ).toThrow('invalid input');
  })

  test('for the input [123, 2, 233] should throw an error', () => {
    const input = [123, 2, 233];

    expect(() => wordLengths( input )).toThrow('invalid input');
  })

  test('for the input function should throw an error', () => {
    const input = () => {};

    expect(() => wordLengths( input )).toThrow('invalid input');
  })

})
