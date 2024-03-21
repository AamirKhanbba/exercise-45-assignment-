// convert in lowercase
let personName: string = "Zubair";
console.log("lowercase:", personName.toLowerCase());

// convert in Uppercase
console.log("uppercase:", personName.toLocaleUpperCase());

// convert in titlecase
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));