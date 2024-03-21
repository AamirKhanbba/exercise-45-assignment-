var guestList = ["Elon Musk", "Mark zuckerbeg", "Bill Gates"];
/* for( let i=0; i<guestList.length; i++){
    console.log("Dear Mr. " + guestList [i] + "\n\n It is our pleasure to invite you to our party. \n\n Thank you .\n");

}*/
var absentGuest = "Elon Musk";
var newGuest = "Larry fink";
guestList[0] = newGuest;
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear Mr. " + guestList[i] + "\n\n It is our pleasure to invite you to our party. \n\n Thank you .\n");
}
console.log("".concat(absentGuest, " is not coming in party."));
console.log("Good news ! we find big Table so we are inviting 3 more guests.");
guestList.unshift("Kamran tessori");
guestList.splice(2, 0, "Asif ali zzardari");
guestList.push("Imran Khan");
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear Mr. " + guestList[i] + "\n\n It is our pleasure to invite you to our party. \n\n Thank you .\n");
}
