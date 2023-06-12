const greetPeople = require("./greet-people");

describe('Given the greetPeople function', () => {
  test('Given the array ["Irina", "Ashleigh", "Etza"] it should return "Hello Irina, Ashleigh and Etza." and keep the original array', () => {
    // Arrange
    const input = ['Irina', 'Ashleigh', 'Etza'];
    const unchanged = ['Irina', 'Ashleigh', 'Etza'];
    const expected = 'Hello Irina, Ashleigh and Etza.';

    // Act
    const output = greetPeople(input);

    // Assert
    expect(output).toEqual(expected);
    expect(input).toEqual(unchanged);
  });

  test('Given the input "Juan" it should return "Hello Juan." and keep the original string', () => {
    const input = 'Juan';
    const unchanged = 'Juan';
    const expected = 'Hello Juan.';

    const output = greetPeople(input);

    expect(output).toEqual(expected);
    expect(input).toEqual(unchanged);
  });

  test('Given the input null it should throw an error', () => {
    const input = null;
    expect( () => greetPeople(input) ).toThrow('invalid input');
  });

  test('Given the input undefined it should throw an error', () => {
    const input = undefined;
    expect( () => greetPeople(input) ).toThrow('invalid input');
  });

  test('Given no input it should throw an error', () => {
    expect( () => greetPeople() ).toThrow('invalid input');
  });
});
