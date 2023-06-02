const removeMiddle = require("./remove-middle");

describe('Given the function removeMiddle', () => {
  test('Given the input ["mouse", "giraffe", "queen", "window", "bottle"] it should return ["queen"] and remove that word from the original array', function() {
    const words = ["mouse", "giraffe", "queen", "window", "bottle"];
  
    const expectedWords = ["mouse", "giraffe", "window", "bottle"];
    const expectedOutput = ["queen"];
  
    const output = removeMiddle(words);
  
    expect(output).toEqual(expectedOutput);
    expect(words).toEqual(expectedWords);
  });

  test('Given the input ["mouse", "giraffe", "queen", "shadow", "window", "bottle"] it should throw an error', () => {
    const input = ["mouse", "giraffe", "queen", "shadow", "window", "bottle"];

    expect( () => removeMiddle( input ) ).toThrow('invalid array length');
  })

  test('Given the input "mouse" it should throw an error', () => {
    const input = 'mouse';
    expect( () => removeMiddle( input ) ).toThrow('invalid input');
  })

  test('Given the input [9, 25, 32, 0, 77] it should return [32] and remove that number from the original array', () => {
    const numbers = [9, 25, 32, 0, 77];
    const expectedOutput = [32];
    const expectedNumbers = [9, 25, 0, 77];

    const output = removeMiddle( numbers );

    expect(output).toEqual(expectedOutput);
    expect(numbers).toEqual(expectedNumbers);
  })

  test('Given the input [null, undefined, undefined] it should throw an error', () => {
    const input = [null, undefined, undefined];
    expect( () => removeMiddle( input ) ).toThrow('invalid input');
  })

  test('Given the input null it should throw an error', () => {
    const input = null;
    expect( () => removeMiddle( input ) ).toThrow('invalid input');
  })

  test('Given the input undefined it should throw an error', () => {
    const input = undefined;
    expect( () => removeMiddle( input ) ).toThrow('invalid input');
  })

  test('Given no input it should throw an error', () => {
    expect( () => removeMiddle() ).toThrow('invalid input');
  })
})
