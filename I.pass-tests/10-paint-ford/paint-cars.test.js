const paintCars = require('./paint-cars');

describe('Given the paintCars function', () => {
  test("Given an array of cars and the color parameter as 'Pink' it should return the same object with the colour setted to Pink and keep the original array", () => {
    const cars = [
      { make: "Ford", model: "Fiesta", colour: "Red" },
      { make: "Land Rover", model: "Defender", colour: "Muddy" },
      { make: "Toyota", model: "Prius", colour: "Silver" },
      { make: "Honda", model: "Civic", colour: "Yellow" }
    ];
  
    const unpaintedCars = [
      { make: "Ford", model: "Fiesta", colour: "Red" },
      { make: "Land Rover", model: "Defender", colour: "Muddy" },
      { make: "Toyota", model: "Prius", colour: "Silver" },
      { make: "Honda", model: "Civic", colour: "Yellow" }
    ];
  
    const repaintedCars = [
      { make: "Ford", model: "Fiesta", colour: "Pink" },
      { make: "Land Rover", model: "Defender", colour: "Pink" },
      { make: "Toyota", model: "Prius", colour: "Pink" },
      { make: "Honda", model: "Civic", colour: "Pink" }
    ];
  
    const output = paintCars(cars, "Pink");
  
    expect(output).toEqual(repaintedCars);
    expect(cars).toEqual(unpaintedCars);
  });
})
