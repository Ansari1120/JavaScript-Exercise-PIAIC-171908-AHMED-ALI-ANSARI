//Store these pizza names in a array,
//  and then use a for loop to print the name of each pizza.

var pizza = ["fajita","Chipotle","ranch","bbq"];

//Modify your for loop to print a sentence using 
// the name of the pizza instead of printing just the name of the pizza. 
// For each pizza you should have one line of output containing 
//a simple statement like I like pepperoni pizza.


for(var i in pizza){
//• If the username is 'admin', print a special greeting,
//  such as Hello admin, would you like to see a status report?
    if(pizza[i] === "fajita"){
        console.log("I like "+pizza[0]+" pizza");
        break;
    }
        //Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
     if (pizza[i] === "Chipotle"){
        console.log("I like "+pizza[1]+" pizza");
                break;
    }
    if (pizza[i] === "ranch"){
        console.log("I like "+pizza[2]+" pizza");
        break;
    }
    if (pizza[i] === "bbq"){
        console.log("I like "+pizza[3]+" pizza");
        break;
    }
  
}

//Add a line at the end of your program, outside the for loop, that states 
// how much you like pizza. The output should consist of
//  three or more lines about the kinds of pizza you like 
// and then an additional sentence, such as I really love pizza!

console.log("i like pizza");

for (var s = 0 ; s < 3;s++)
{
    console.log("kinds of pizzas i love the most were : \n"+pizza[s]);
    console.log("i really love pizza");
}   
