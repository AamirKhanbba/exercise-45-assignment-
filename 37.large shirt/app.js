"use strict";
function makeShirt(size = "large", message = "I love python.") {
    console.log(`The shirt is ${size} size and has the message: "${message}".`);
}
makeShirt();
makeShirt("medium");
makeShirt("small", "CSS is a fun tool!");
