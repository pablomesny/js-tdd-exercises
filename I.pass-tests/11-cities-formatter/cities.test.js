const formatCities = require("./cities");

describe('Given the formatCities function', () => {

  test("Given an array of objects with city and country keys and a transform callback it should return an array of objects that passes throw the callback and keep the original array", function() {
    const capitals = [
      { city: "Paris", country: "France" },
      { city: "Madrid", country: "Spain" },
      { city: "Rome", country: "Italy" }
    ];
    const transform = ({ city, country }) => {
      return `${city} is the capital of ${country}`;
    }
    const expected = [
      "Paris is the capital of France",
      "Madrid is the capital of Spain",
      "Rome is the capital of Italy"
    ];
  
    const result = formatCities(capitals, transform);
  
    expect(result).toEqual(expected);
  })
});
