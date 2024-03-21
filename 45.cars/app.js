"use strict";
function carInfo(manufacturer, model, ...extras) {
    const car = {
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
