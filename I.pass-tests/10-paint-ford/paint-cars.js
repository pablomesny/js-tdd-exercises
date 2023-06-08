const paintCars = ( cars, colour ) => {
    // structuredClone
    let carsCopy = ([...cars]);
    return carsCopy.map( car => ({ ...car, colour: 'Pink' }) );
}

module.exports = paintCars;