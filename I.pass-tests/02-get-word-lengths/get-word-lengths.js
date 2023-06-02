var getWordLengths = function(someWords) {

    const isAnArrayOfWords = Array.isArray( someWords ) && someWords.every( word => typeof word === 'string' );

    const isAWord = !Array.isArray( someWords ) && typeof someWords === 'string';
    
    if( !isAnArrayOfWords && !isAWord ) {
        throw new Error( 'invalid input' );
    }

    return isAnArrayOfWords 
        ? someWords.map( word => word.length )
        : someWords.length;
};

module.exports = getWordLengths;
