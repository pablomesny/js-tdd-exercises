// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function getAverage( array ) {

    if( typeof array === 'number' ) return array;
    
    const isAnArrayWithNumbers = Array.isArray( array) && array.some( elem => typeof elem === 'number' );

    if( !isAnArrayWithNumbers ) {
        throw new Error('invalid input');
    }

    let sum = 0;
    let numCounter = 0;

    array.forEach( elem => {
        if( typeof elem === 'number' ){
            numCounter += elem;
            sum++;
        }
    })
    return numCounter / sum;
}

module.exports = getAverage;
