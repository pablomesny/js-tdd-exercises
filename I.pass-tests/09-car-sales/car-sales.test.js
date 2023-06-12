const getCarSalesByBrand = require("./car-sales");
const sales = require("./car-sales");

describe('Given the function getCarSalesByBrand', () => {
  test("Given an array of cars it should return { Ford: 22999, Honda: 8000, 'Land Rover': 21000, Toyota: 6500 } and keep the original array", function() {
    const carsSold = [
      { make: "Ford", model: "Fiesta", colour: "Red", price: 5999 },
      { make: "Land Rover", model: "Defender", colour: "Muddy", price: 12000 },
      { make: "Toyota", model: "Prius", colour: "Silver", price: 6500 },
      { make: "Honda", model: "Civic", colour: "Yellow", price: 8000 },
      { make: "Ford", model: "Fiesta", colour: "Red", price: 15000 },
      { make: "Land Rover", model: "Discovery", colour: "Blue", price: 9000 },
      { make: "Ford", model: "Fiesta", colour: "Green", price: 2000 }
    ];
    const unchanged = [
      { make: "Ford", model: "Fiesta", colour: "Red", price: 5999 },
      { make: "Land Rover", model: "Defender", colour: "Muddy", price: 12000 },
      { make: "Toyota", model: "Prius", colour: "Silver", price: 6500 },
      { make: "Honda", model: "Civic", colour: "Yellow", price: 8000 },
      { make: "Ford", model: "Fiesta", colour: "Red", price: 15000 },
      { make: "Land Rover", model: "Discovery", colour: "Blue", price: 9000 },
      { make: "Ford", model: "Fiesta", colour: "Green", price: 2000 }
    ];
    const expected = {
      Ford: 22999,
      Honda: 8000,
      "Land Rover": 21000,
      Toyota: 6500
    };
  
    const output = sales(carsSold);
  
    expect(output).toEqual(expected);
    expect(carsSold).toEqual(unchanged);
  });

  test('Given the car { make: "Ford", model: "Fiesta", colour: "Red", price: 5999 } it should return { Ford: 5999 } and keep the original one', () => {
    const car = {
      make: "Ford",
      model: "Fiesta",
      colour: "Red",
      price: 5999
    };
    const unchanged = {
      make: "Ford",
      model: "Fiesta",
      colour: "Red",
      price: 5999
    };
    const expected = { Ford: 5999 };

    const output = getCarSalesByBrand(car);

    expect(output).toEqual(expected);
    expect(car).toEqual(unchanged);
  });

  test('Given the object { brand: "Mazda", salePrice: 2000 } it should throw an error', () => {
    const input = {
      brand: 'Mazda',
      salePrice: 2000
    };
    expect( () => getCarSalesByBrand(input) ).toThrow('invalid input');
  });

  test('Given the input "Hello world" it should throw an error', () => {
    const input = 'Hello world';
    expect( () => getCarSalesByBrand(input) ).toThrow('invalid input');
  });

  test('Given the null input it should throw an error', () => {
    const input = null;
    expect( () => getCarSalesByBrand(input) ).toThrow('invalid input');
  });

  test('Given the undefined input it should throw an error', () => {
    const input = undefined;
    expect( () => getCarSalesByBrand(input) ).toThrow('invalid input');
  });
})
