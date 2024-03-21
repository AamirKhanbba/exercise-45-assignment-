let magician: string [] = ["Herry Potter", "Hernione Granger", "Ron Weasley", "Albus Dumbledore"];

function make_gtreat(magicianArray:string[] ){
    for(let i=0; i<magicianArray.length; i++){
        magician[i] = "the Geat " + magicianArray[i]
    }
}

function show_magicians(magicians: string []){

    magicians.forEach(Element => {
        console.log(Element);
    });
}
make_gtreat  (magician);
show_magicians(magician);