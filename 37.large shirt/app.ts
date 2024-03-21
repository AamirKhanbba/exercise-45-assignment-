function makeShirt(size: string = "large", message: string = "I love python."): void {
    console.log(`The shirt is ${size} size and has the message: "${message}".`);
}

makeShirt();

makeShirt("medium");

makeShirt("small", "CSS is a fun tool!");