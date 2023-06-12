const formatCities = ( cities, callback ) => {

    const isAnArray = Array.isArray(cities);
    const isACity = !isAnArray && cities && cities.city && cities.country;
    const isAFunction = typeof callback === 'function';
    const isAnArrayOfCities = isAnArray && cities.every( city => city.city && city.country );

    if( !isAnArrayOfCities && !isACity ) {
        throw new Error('invalid input');
    }

    if( !isAFunction ) {
        return cities;
    }

    const citiesCopy = JSON.parse(JSON.stringify(cities));

    if( !isAnArray ) {
        return callback(citiesCopy);
    }

    return citiesCopy.map( place => {
        return callback(place);
    });
}

module.exports = formatCities;