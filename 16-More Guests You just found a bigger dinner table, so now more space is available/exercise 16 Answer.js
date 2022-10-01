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

//• Start with your program from Exercise 15. 
// Add a print statement to the end of your program informing people that you found a bigger dinner table.

console.log("\n......................found a bigger dinner table.....................\n")

// Add one new guest to the beginning of your array.

families.unshift("Marcho and friends");

// Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.
//in js we can do appending with splice method.

families.splice(2,0,"halsey and family");

console.log("hey! " +families[0] +" ,it would be great if you and your family come tomorrow night for dinner");

console.log("we are of away today can you  "+families[1]+" at weekend for dinner?");

console.log("this is a long day mate ! have a dinner at my place are you coming?  : "+families[2]);

console.log("Seems to be a long time yet we guyes met have a meet and greet at tomorrow night dinner "+families[3]);

console.log("hey its been so long see you tonight at my place "+families[4]);


