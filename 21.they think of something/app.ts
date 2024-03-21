interface City {
    city : string;
    population : number;
    state : string
};
 
let City:City = {
    city : "New York",
    population : 8774328,
    state : "New York"
       
}
console.log(City);

interface Car {
    maker : string;
    color : string;
    automatic : boolean
};
let Car = {
    maker : "Audi",
    color : "Gray",
    automatic : true
};
console.log(Car);