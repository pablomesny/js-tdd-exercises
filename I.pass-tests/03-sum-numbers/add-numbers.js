function addNumbers(numbers) {

    const isAnArrayOfNumbers = Array.isArray( numbers ) && numbers.every( number => typeof number === 'number' );

    const isANumber = !Array.isArray( numbers ) && typeof numbers === 'number';

    if( !isAnArrayOfNumbers && !isANumber ) {
        throw new Error('invalid input');
    }

    return isAnArrayOfNumbers
        ? numbers.reduce( (acc, current) => acc + current, 0 )
        : numbers;
}

module.exports = addNumbers;
