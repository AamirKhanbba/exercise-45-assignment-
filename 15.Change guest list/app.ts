let guestList: string[] = ["Elon Musk", "Mark zuckerbeg", "Bill Gates"];
for( let i=0; i<guestList.length; i++){
    console.log("Dear Mr. " + guestList [i] + "\n\n It is our pleasure to invite you to our party. \n\n Thank you .\n");


}

let absentGuest: string = "Elon Musk";

let newGuest: string = "Larry fink";

guestList[0] = newGuest;

for( let i=0; i<guestList.length; i++){
    console.log("Dear Mr. " + guestList [i] + "\n\n It is our pleasure to invite you to our party. \n\n Thank you .\n");

}

console.log(`${absentGuest} is not coming in party.`)