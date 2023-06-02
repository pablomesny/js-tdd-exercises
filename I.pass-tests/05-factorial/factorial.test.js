const factorial = require("./factorial");

describe('Given the factorial function', () => {
    test('given the input 9 it should return 362880 and keep the original one', () => {
        const input = 9;
        const expected = 362880;
        const unchanged = 9;

        const output = factorial(input);

        expect(output).toBe(expected);
        expect(input).toBe(unchanged);
    })

    test('given the input 0 it should return 1 and keep the original one', () => {
        const input = 0;
        const expected = 1;
        const unchanged = 0;

        const output = factorial( input );

        expect(output).toBe(expected);
        expect(input).toBe(unchanged);
    })

    test('given the input -1 it should throw an error', () => {
        const input = -1;
        expect( () => factorial(input) ).toThrow('invalid input');
    })

    test('given the input "string" it should throw an error', () => {
        const input = 'string';
        expect( () => factorial(input) ).toThrow('invalid input');
    })

    test('given the input [1, 23, 5] it should throw an error', () => {
        const input = [1, 23, 5];
        expect( () => factorial( input ) ).toThrow('invalid input');
    })

    test('given no input it should throw an error', () => {
        expect( () => factorial() ).toThrow('invalid input');
    })

    test('given the input null it should throw an error', () => {
        const input = null;
        expect( () => factorial( input ) ).toThrow('invalid input');
    })

    test('given the input undefined it should throw an error', () => {
        const input = undefined;
        expect( () => factorial( input ) ).toThrow('invalid input');
    })
})