function carInfo(manufacturer: string, model: string, ...extras: [string, any][]): { manufacturer: string, model: string, [key: string]: any } {
    const car: { manufacturer: string, model: string, [key: string]: any } = {
        manufacturer,
        model
    };

    extras.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}


const car = carInfo("Toyota", "Camry", ["color", "red"], ["year", 2022]);

console.log(car);
