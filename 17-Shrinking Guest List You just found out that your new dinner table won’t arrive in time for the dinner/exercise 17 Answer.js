//old family list 
var families = ["Micheal's family","Sam and his colleagues","Darren's family"];

//family list updated !
for(var i = 0; i < families.length; i++){
    families[i]=families[i].replace("Sam and his colleagues","Curran and family");
}

console.log("\t\t\t\t\t\t\t\t\t\NOTE ! \t\nUnfortunate! "+families[1]+" cant possibile to meet and greet for a today's dinner");

console.log("here is the updated list would be below:");

console.log("hey! " +families[0] +" ,it would be great if you and your family come tomorrow night for dinner");

console.log("we are of away today can you  "+families[1]+" at weekend for dinner?");

console.log("this is a long day mate ! have a dinner at my place are you coming?  : "+families[2]);

//• • Start with your program from Exercise 16. 
// Add a new line that prints a message saying that you can invite only two people for dinner.


console.log("\n......................invite only two people for dinner......................\n")

// Add one new guest to the beginning of your array.

families.unshift("Marcho and friends");

// Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.
//in js we can do appending with splice method.

families.splice(2,0,"halsey and family");

// Remove guests from your list one at a time until only two names remain in your list.
//  Each time you pop a name from your list, 
// print a message to that person letting them know you’re sorry you can’t invite them to dinner.


console.log("sorry i can't invite you for dinner! " +families[4]);
families.pop();


console.log("sorry i can't invite you for dinner! " +families[3]);
families.pop();

console.log("sorry i can't invite you for dinner! " +families[2]);
families.pop();

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

console.log("\nhey ! You're still invited. : "+families[0]);
console.log("\nhey ! You're also still invited. : "+families[1]);


// Remove the last two names from your list, so you have an empty list. 
// Print your list to make sure you actually have an empty list at the end of your program

families.pop();
families.pop();


console.log(families[0]);
console.log(families[1]);
