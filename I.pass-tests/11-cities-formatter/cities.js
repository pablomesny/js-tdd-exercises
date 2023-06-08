const formatCities = ( cities, callback ) => {
    let citiesCopy = [...cities];

    return citiesCopy.map( place => {
        return callback(place);
    });
}

module.exports = formatCities;