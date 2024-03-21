"use strict";
let currentUsers = ["AamiR", "Aliyar", "HaNia", "ZubaiR", "Taimoor"];
let newUsers = ["AamiR", "HaNia", "Khan", "Solangi", "Adam"];
newUsers.forEach(newUsersName => {
    let lowerCase = newUsersName.toLowerCase();
    if (currentUsers.map(c_user => c_user.toLowerCase().includes(lowerCase))) {
        console.log(`The username ${newUsersName} is not available . please write a diffrent username `);
    }
    else {
        console.log(`The usernames ${newUsersName} is avaiable.`);
    }
});
