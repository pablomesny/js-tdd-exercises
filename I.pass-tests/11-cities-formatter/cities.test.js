const formatCities = require("./cities");

describe('Given the formatCities function', () => {

  test("Given an array of objects with city and country keys and a transform callback it should return an array of objects that passes throw the callback and keep the original array", () => {
    const capitals = [
      { city: "Paris", country: "France" },
      { city: "Madrid", country: "Spain" },
      { city: "Rome", country: "Italy" }
    ];
    const unchanged = [
      { city: "Paris", country: "France" },
      { city: "Madrid", country: "Spain" },
      { city: "Rome", country: "Italy" }
    ];
    const expected = [
      "Paris is the capital of France",
      "Madrid is the capital of Spain",
      "Rome is the capital of Italy"
    ];

    const transform = ({ city, country }) => {
      return `${city} is the capital of ${country}`;
    }
  
    const result = formatCities(capitals, transform);
  
    expect(result).toEqual(expected);
    expect(capitals).toEqual(unchanged);
  });

  test('Given an array of objects with city and country keys and a transform callback it should return an array of objects that passes throw the callback and keep the original array', () => {
    const capitals = [
      { city: "Paris", country: "France" },
      { city: "Madrid", country: "Spain" },
      { city: "Rome", country: "Italy" }
    ];
    const unchanged = [
      { city: "Paris", country: "France" },
      { city: "Madrid", country: "Spain" },
      { city: "Rome", country: "Italy" }
    ];
    const expected = [
      { city: "Paris", country: "France", continent: "Europe" },
      { city: "Madrid", country: "Spain", continent: "Europe" },
      { city: "Rome", country: "Italy", continent: "Europe" }
    ]

    const transform = (city) => {
      city.continent = 'Europe';
      return city;
    };

    const output = formatCities( capitals, transform );

    expect(output).toEqual(expected);
    expect(capitals).toEqual(unchanged);
  });

  test('Given the input { city: "Paris", country: "France", continent: "Europe" } and the callback transform it should return "Paris is the capital of France" and keep the original object', () => {
    const city = { city: "Paris", country: "France", continent: "Europe" };
    const unchanged = { city: "Paris", country: "France", continent: "Europe" };
    const expected = 'Paris is the capital of France';

    const transform = ({ city, country }) => {
      return `${city} is the capital of ${country}`;
    }
    const output = formatCities(city, transform);

    expect(output).toEqual(expected);
    expect(city).toEqual(unchanged);
  })

  test('Given the input { city: "Paris", country: "France", continent: "Europe" } and no callback it should return the same object and keep the original', () => {
    const input = { city: "Paris", country: "France", continent: "Europe" };
    const unchanged = { city: "Paris", country: "France", continent: "Europe" };
    const expected = { city: "Paris", country: "France", continent: "Europe" };

    const output = formatCities(input);
    
    expect(output).toEqual(expected);
    expect(input).toEqual(unchanged);
  });

  test('Given the input { city: "Paris", country: "France", continent: "Europe" } and null as callback it should return the same object and keep the original', () => {
    const input = { city: "Paris", country: "France", continent: "Europe" };
    const unchanged = { city: "Paris", country: "France", continent: "Europe" };
    const expected = { city: "Paris", country: "France", continent: "Europe" };

    const transform = null;

    const output = formatCities(input, transform);
    
    expect(output).toEqual(expected);
    expect(input).toEqual(unchanged);
  });

  test('Given the input { city: "Paris", country: "France", continent: "Europe" } and undefined as callback it should return the same object and keep the original', () => {
    const input = { city: "Paris", country: "France", continent: "Europe" };
    const unchanged = { city: "Paris", country: "France", continent: "Europe" };
    const expected = { city: "Paris", country: "France", continent: "Europe" };

    const transform = undefined;

    const output = formatCities(input, transform);
    
    expect(output).toEqual(expected);
    expect(input).toEqual(unchanged);
  });

  test('Given the input null and a callback it should throw an error', () => {
    const input = null;
    const transform = () => {};

    expect( () => formatCities(input, transform) ).toThrow('invalid input');
  })

  test('Given the input undefined and a callback it should throw an error', () => {
    const input = undefined;
    const transform = () => {};

    expect( () => formatCities(input, transform) ).toThrow('invalid input');
  })
});
