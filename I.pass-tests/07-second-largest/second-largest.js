function secondLargest( array ) {

    const isAnArray = Array.isArray( array );
    const isAnArrayOfNumbers = isAnArray && array.every( item => typeof item === 'number' );

    if( !isAnArrayOfNumbers ) {
        throw new Error('invalid input');
    }

    let max = array[0];
    let secondMax = -Infinity;

    array.forEach( number => {
        if( number > max ) {
            secondMax = max;
            max = number;
        }
        if( number > secondMax && number < max ) {
            secondMax = number;
        }
    })

    return secondMax;
}

module.exports = secondLargest;