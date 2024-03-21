// Unchanged Magicians: Start with your work from Exercise 40.
//  Call the function make_great() with a copy of the array of magicians’ names.
//  Because the original array will be unchanged, return the new array and store it in a separate array.
//  Call show_magicians() with each array to show that you have one array of the original names and one 
// array with the Great added to each magician’s name.




let magician: string [] = ["Herry Potter", "Hernione Granger", "Ron Weasley", "Albus Dumbledore"];

function copyAray(magic:string[]){
    return [...magic]
}

function make_gtreat(magicianArray:string[] ){
    for(let i=0; i<magicianArray.length; i++){
        magicianArray[i] =  "the Geat"  + magicianArray[i]
    }
}

function show_magicians(magicians: string []){

    magicians.forEach(Element => {
        console.log(Element);
    });
}

const copyMagicanArray =copyAray(magician)
make_gtreat  (copyMagicanArray);
console.log("\n\nThis is oringal array ");

show_magicians(magician);

console.log("\n\nThis is modified array ");

show_magicians(magician);