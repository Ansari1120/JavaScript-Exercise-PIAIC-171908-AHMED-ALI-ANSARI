//including the name 'admin'. Imagine you are writing code that will print a 
// greeting to each user after they log in to a website. 
// Loop through the array, and print a greeting to each user:

var usernames = ['admin',"Farhat","Qasim","Saim","Neha"];
 var length = usernames.length;
 usernames.splice(0,length);
for(var i in usernames){
//• If the username is 'admin', print a special greeting,
//  such as Hello admin, would you like to see a status report?
    if(usernames[i] === 'admin'){
        console.log("Hello admin,would you like to see a status report?");
        break;
    }
        //Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
    else if (usernames[i] === 'Farhat'){
        console.log("Hello"+usernames[i]+"Thanyou for logging in again");
        break;
    }
    else if (usernames[i] === 'Qasim'){
        console.log("Hello"+usernames[i]+"Thanyou for logging in again");
        break;
    }
    else if (usernames[i] === 'Saim'){
        console.log("Hello"+usernames[i]+"Thanyou for logging in again");
        break;
    }
    else if (usernames[i] === 'Neha'){
        console.log("Hello"+usernames[i]+"Thanyou for logging in again");
        break;
    }
    //• If the list is empty, print the message We need to find some users!
    //• Remove all of the usernames from your array, and make sure the correct message is printed.

}
if(usernames == 0){
    console.log("we need to find some users !");
}
