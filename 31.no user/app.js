"use strict";
const userNames = ["admin", "aamir", "ali", "khan"];
if (userNames.length === 0) {
    console.log("we need to find some users.");
}
else {
    userNames.length = 0;
    console.log("all usernames have been removed." + userNames.length);
}
