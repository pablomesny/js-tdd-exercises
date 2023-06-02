function removeMiddle( array ) {

    const isAnArray = Array.isArray( array );
    const hasInvalidValues = isAnArray && array.some( value => !value && value !== 0 );

    if( !isAnArray || hasInvalidValues ) {
        throw new Error('invalid input');
    }

    if( array.length % 2 === 0 ) {
        throw new Error('invalid array length');
    }

    const middleValueIndex = (array.length - 1) / 2;
    return array.splice( middleValueIndex, 1 );
}

module.exports = removeMiddle;