function findNeedle( words, key = '' ) {

    const isAnArray = Array.isArray( words );

    if( !isAnArray ) {
        throw new Error('invalid input');
    }

    return words.findIndex( word => word === key );
}

module.exports = findNeedle;
