"use strict";
function describeCity(city, country = "unknown") {
    console.log(`${city} is in ${country}.`);
}
describeCity("karachi", "pakistan");
describeCity("New York", "USA");
describeCity("Tokyo");
