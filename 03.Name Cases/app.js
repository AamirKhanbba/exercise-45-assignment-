// convert in lowercase
var personName = "Zubair";
console.log("lowercase:", personName.toLowerCase());
// convert in Uppercase
console.log("uppercase:", personName.toLocaleUpperCase());
// convert in titlecase
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
