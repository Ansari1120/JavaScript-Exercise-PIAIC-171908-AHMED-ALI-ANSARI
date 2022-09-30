//old family list 
var families = ["Micheal's family","Sam and his colleagues","Darren's family"];

//family list updated !
for(var i = 0; i < families.length; i++){
    families[i]=families[i].replace("Sam and his colleagues","Curran and family");
}
console.log("hey! " +families[0] +" ,it would be great if you and your family come tomorrow night for dinner");
console.log("we are of away today can you  "+families[1]+" at weekend for dinner?");
console.log("this is a long day mate ! have a dinner at my place are you coming?  : "+families[2]);

console.log("\t\t\t\t\t\t\t\t\t\NOTE ! \t\nUnfortunate! "+families[1]+"cant possibile to meet and greet for a today's dinner");
