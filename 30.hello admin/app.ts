const userName: string [] = ["admin","aamir", "ali", "Aliyar"];

userName.forEach(user =>{
    if(user === "admin"){
        console.log("Hello admin, would you like to see the status eport?");
    }else{
        console.log(`Hello ${user}, thank you for logging in again.`);
    }
} );