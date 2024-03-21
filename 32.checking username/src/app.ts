// Make a list of current users
let currentUsers: string[] = ["AamiR", "Aliyar", "HaNia", "ZubaiR", "Taimoor"];

// Make a list of new users
let newUsers: string[] = ["Bilal", "HaNia", "Khan", "Solangi", "Adam"];

// Convert currentUsers to lowercase for case-insensitive comparison
let currentUsersLower: string[] = currentUsers.map(user => user.toLowerCase());

// Loop through newUsers to check for availability
newUsers.forEach(newUser => {
    // Convert newUser to lowercase for case-insensitive comparison
    let lowercaseNewUser: string = newUser.toLowerCase();
    // Check if the new username is already taken
    if (currentUsersLower.includes(lowercaseNewUser)) {
        console.log(`Sorry, the username '${newUser}' is already taken. Please choose a different one.`);
    } else {
        console.log(`Congratulations! The username '${newUser}' is available.`);
    }
});
