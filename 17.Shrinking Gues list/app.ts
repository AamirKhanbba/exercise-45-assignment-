let guestList: string[] = ["Elon Musk", "Mark zuckerbeg", "Bill Gates"];

/* for( let i=0; i<guestList.length; i++){
    console.log("Dear Mr. " + guestList [i] + "\n\n It is our pleasure to invite you to our party. \n\n Thank you .\n");

}*/

let absentGuest: string = "Elon Musk";

let newGuest: string = "Larry fink";

guestList[0] = newGuest;

// for( let i=0; i<guestList.length; i++){
    // console.log("Dear Mr. " + guestList [i] + "\n\n It is our pleasure to invite you to our party. \n\n Thank you .\n");

// }

console.log(`${absentGuest} is not coming in party.`);

console.log("Good news ! we find big Table so we are inviting 3 more guests.")

guestList.unshift("Kamran tessori");
guestList.splice(2 , 0 , "Asif ali zzardari");
guestList.push("Imran Khan");

for( let i=0; i<guestList.length; i++){
    console.log("Dear Mr. " + guestList [i] + "\n\n It is our pleasure to invite you to our party. \n\n Thank you .\n");

}
// sorry message send guest remove invited
console.log("\n Sorry we can not arrange Table , Only two people will be invited.");

// remove guest other 
while(guestList.length > 2){
    let removeGuest = guestList.pop()
    console.log(`Sorry Mr ${removeGuest}, You are not invited for Dinnerr.`);
}
// last invited 
for( let i=0; i<guestList.length; i++){
    console.log("Dear Mr. " + guestList [i] + "\n\n You are still invited \n\n Thank you .\n\n");

}
// still invited
guestList.splice(0, 2);

console.log(guestList);