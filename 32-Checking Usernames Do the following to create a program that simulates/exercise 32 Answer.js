//simulates how websites ensure that everyone has a unique username.


//• Make a list of five or more usernames called current_users.

var current_users = ['Farhat','admin','Qasim','Saim','Neha'];

//• Make another list of five usernames called new_users
//  Make sure one or two of the new usernames are also in the current_users list.

var new_users = ['Farhat','admin','Ubaid','Zohaib','Shamir'];

var check = current_users + new_users;

//Loop through the new_users list to see if each new username has already been used. 
// If it has, print a message that the person will need to enter a new username. If a username has not been used, 
// print a message saying that the username is available.


// const unique = (value, index, self) => {
//     return self.indexOf(value) === index
//   }
//      const unique_users = new_users.filter(unique)
  
// //   console.log(unique_users)

for(var i in new_users){
    if(current_users[i] == new_users[i]){
        console.log("enter a new username");
        break;
    }
    else{
        console.log("username is available");
      
    }

}


