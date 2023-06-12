function getCarSalesByBrand( cars ) {
    const isArray = Array.isArray( cars );
    const isAnArrayOfCars = isArray && cars.every( car => car.make && car.price );
    const isACar = !isArray && cars && cars.make && cars.price;

    if( !isACar && !isAnArrayOfCars || !cars ) {
        throw new Error('invalid input');
    }

    let result = {};

    if( isACar ) {
        const { make, price } = cars;
        result = {
            [make]: price
        }
    }

    if( isAnArrayOfCars ) {
        cars.forEach( car => {
            const { make, price } = car;
            if( !result[make] ) {
                result[make] = price;
            } else {
                result[make] += price;
            }
        })
    }

    return result;
}

module.exports = getCarSalesByBrand;