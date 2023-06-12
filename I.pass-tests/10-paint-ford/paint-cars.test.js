const paintCars = require('./paint-cars');

describe('Given the paintCars function', () => {
  test("Given an array of cars and the color parameter as 'Pink' it should return the same object with the colour setted to Pink and keep the original array", () => {
    const cars = [
      { make: "Ford", model: "Fiesta", colour: "Red" },
      { make: "Land Rover", model: "Defender", colour: "Muddy" },
      { make: "Toyota", model: "Prius", colour: "Silver" },
      { make: "Honda", model: "Civic", colour: "Yellow" }
    ];
    const unchanged = [
      { make: "Ford", model: "Fiesta", colour: "Red" },
      { make: "Land Rover", model: "Defender", colour: "Muddy" },
      { make: "Toyota", model: "Prius", colour: "Silver" },
      { make: "Honda", model: "Civic", colour: "Yellow" }
    ];
    const expected = [
      { make: "Ford", model: "Fiesta", colour: "Pink" },
      { make: "Land Rover", model: "Defender", colour: "Pink" },
      { make: "Toyota", model: "Prius", colour: "Pink" },
      { make: "Honda", model: "Civic", colour: "Pink" }
    ];
  
    const output = paintCars(cars, "Pink");
  
    expect(output).toEqual(expected);
    expect(cars).toEqual(unchanged);
  });

  test("Given the input { make: 'Toyota', model: 'Prius', colour: 'Pink' } and 'Red' it should return { make: 'Toyota', model: 'Prius', colour: 'Red' } and keep the original object", () => {
    const car = {
      make: 'Toyota',
      model: 'Prius',
      colour: 'Pink'
    };
    const unchanged = {
      make: 'Toyota',
      model: 'Prius',
      colour: 'Pink'      
    };
    const expected = {
      make: 'Toyota',
      model: 'Prius',
      colour: 'Red'
    };

    const output = paintCars( car, 'Red' );

    expect(output).toEqual(expected);
    expect(car).toEqual(unchanged);
  });

  test('Given the input [ "Ford", "Green" ] and the colour "Red" it should throw an error', () => {
    const input = [ 'Ford', 'Green' ];
    expect( () => paintCars(input, 'Red') ).toThrow('invalid input');
  });

  test('Given the input "Hello world" it should throw an error', () => {
    const input = 'Hello world';
    expect( () => paintCars(input) ).toThrow('invalid input');
  });

  test('Given the input { brand: "Ford", colour: "Pink" } and the colour "Red" it should throw an error', () => {
    const input = {
      brand: 'Ford',
      colour: 'Pink'
    };
    expect( () => paintCars(input, 'Red') ).toThrow('invalid input');
  });

  test('Given the { make: "Ford", model: "Fiesta", colour: "Pink" } and the colour null it should throw an error', () => {
    const car = {
      make: 'Ford',
      model: 'Fiesta',
      colour: 'Pink'
    };

    expect( () => paintCars(car, null) ).toThrow('invalid input');
  });

  test('Given the { make: "Ford", model: "Fiesta", colour: "Pink" } and the colour undefined it should throw an error', () => {
    const car = {
      make: 'Ford',
      model: 'Fiesta',
      colour: 'Pink'
    };

    expect( () => paintCars(car, undefined) ).toThrow('invalid input');
  });

  test('Given the { make: "Ford", model: "Fiesta", colour: "Pink" } and the colour 123 it should throw an error', () => {
    const car = {
      make: 'Ford',
      model: 'Fiesta',
      colour: 'Pink'
    };

    expect( () => paintCars(car, 123) ).toThrow('invalid input');    
  });

  test('Given the { make: "Ford", model: "Fiesta", colour: "Pink" } and no colour it should throw an error', () => {
    const car = {
      make: 'Ford',
      model: 'Fiesta',
      colour: 'Pink'
    };

    expect( () => paintCars(car) ).toThrow('invalid input');    
  });
  
  test('Given the car null and the colour "Red" it should throw an error', () => {
    const car = null;
    expect( () => paintCars(car, 'Red') ).toThrow('invalid input');
  });

  test('Given the car undefined and the colour "Red" it should throw an error', () => {
    const car = undefined;
    expect( () => paintCars(car, 'Red') ).toThrow('invalid input');
  });
})
