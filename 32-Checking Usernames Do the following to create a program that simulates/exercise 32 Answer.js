//simulates how websites ensure that everyone has a unique username.


//• Make a list of five or more usernames called current_users.

var current_users = ['Farhat','admin','Qasim','Saim','Neha'];

//• Make another list of five usernames called new_users
//  Make sure one or two of the new usernames are also in the current_users list.

var new_users = ['Farhat','Neha','Ubaid','Zohaib','Shamir'];

//Loop through the new_users list to see if each new username has already been used. 
// If it has, print a message that the person will need to enter a new username. If a username has not been used, 
// print a message saying that the username is available.


for(var i in new_users){
    for(var i2 in current_users){
       if(current_users[i2].toLowerCase() === new_users[i].toLowerCase()){
        console.log("enter a new username");
        break;
    }
     else {
        console.log("username is available");
        break;
    }  
    }
   
}