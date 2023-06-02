module.exports = function(numbers) {

    if(!numbers || !Array.isArray( numbers ) || !numbers.every( number => typeof number === 'number' )) {
        throw new Error('invalid input');
    }

    return numbers.map( number => number + 1 );
};