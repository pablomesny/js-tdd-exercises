const findTheNeedle = require("./find-needle");

describe('Given the findNeedle function', () => {
  test('Given the inputs ["house", "train", "slide", "needle", "book"] and "needle" should return 3 and keep the original one', () => {
    const words = ["house", "train", "slide", "needle", "book"];
    const unchanged = ["house", "train", "slide", "needle", "book"];
    const expected = 3;
  
    const output = findTheNeedle(words, "needle");

    expect(output).toEqual(expected);
    expect(words).toEqual(unchanged);
  });
  
  test('Given the inputs ["plant", "shelf", "arrow", "bird"] and "plant" should return 3 and keep the original one', () => {
    const words = ["plant", "shelf", "arrow", "bird"];
    const unchanged = ["plant", "shelf", "arrow", "bird"];
    const expected = 0;
  
    const output = findTheNeedle(words, "plant");

    expect(output).toEqual(expected);
    expect(words).toEqual(unchanged);
  });

  test('Given the inputs ["house", "train", "slide", "needle", "book"] and "empty" should return -1 and keep the original', () => {
    const words = ["house", "train", "slide", "needle", "book"];
    const unchanged = ["house", "train", "slide", "needle", "book"];
    const expected = -1;

    const output = findTheNeedle( words, 'empty' );

    expect( output ).toEqual( expected );
    expect( words ).toEqual( unchanged );
  })

  test('Given the input ["house", "train", "slide", "needle", "book"] should return -1 and keep the original', () => {
    const words = ["house", "train", "slide", "needle", "book"];
    const unchanged = ["house", "train", "slide", "needle", "book"];
    const expected = -1;

    const output = findTheNeedle( words );

    expect( output ).toEqual( expected );
    expect( words ).toEqual( unchanged );
  })

  test('Given the input "test" should throw an error', () => {
    const input = "test";
    expect( () => findTheNeedle( input ) ).toThrow( 'invalid input' );
  })

})

