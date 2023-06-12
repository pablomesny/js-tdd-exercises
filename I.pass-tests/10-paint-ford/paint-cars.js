const paintCars = ( cars, colour ) => {
    // structuredClone
    const isArray = Array.isArray(cars);
    const isAnArrayOfCars = isArray && cars.every( car => car.make && car.model && car.colour );
    const isACar = !isArray && cars && cars.make && cars.model && cars.colour;
    const isAValidColour = colour && typeof colour === 'string';

    if( !isACar && !isAnArrayOfCars || !isAValidColour ) {
        throw new Error('invalid input');
    }

    if( isACar ) {
        return {
            ...cars,
            colour
        }
    };

    if( isAnArrayOfCars ) {
        let carsCopy = ([...cars]);
        return carsCopy.map( car => ({ ...car, colour }) );
    }
}

module.exports = paintCars;