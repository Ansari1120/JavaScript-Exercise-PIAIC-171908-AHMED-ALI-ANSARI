// • Store the locations in a array. Make sure the array is not in alphabetical order.

var locations = ["SingaPore","Baku","Dubai","California"];

// • Print your array in its original order.

for(var i=0;i<locations.length;i++){
    console.log(locations[i]);
}

console.log("\n..................................................................................\n");

// • Print your array in alphabetical order without modifying the actual list.

locations.sort();

for(var i=0;i<locations.length;i++){
    console.log(locations[i]);
}

console.log("\n..................................................................................\n");

//• Show that your array is still in its original order by printing it.

locations = ["SingaPore","Baku","Dubai","California"];

for(var i=0;i<locations.length;i++){
    console.log(locations[i]);
}

console.log("\n..................................................................................\n");

// • Print your array in reverse alphabetical order without changing the order of the original list.

locations.reverse();

for(var i=0;i<locations.length;i++){
    console.log(locations[i]);
}

console.log("\n..................................................................................\n");

// • Show that your array is still in its original order by printing it again.

locations = ["SingaPore","Baku","Dubai","California"];

for(var i=0;i<locations.length;i++){
    console.log(locations[i]);
}

console.log("\n..................................................................................\n");

// • Reverse the order of your list. Print the array to show that its order has changed.

locations.reverse();

for(var i=0;i<locations.length;i++){
    console.log(locations[i]);
}

console.log("\n..................................................................................\n");

//• Reverse the order of your list again. Print the list to show it’s back to its original order.

locations.reverse();

for(var i=0;i<locations.length;i++){
    console.log(locations[i]);
}

console.log("\n..................................................................................\n");

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

locations.sort();

for(var i=0;i<locations.length;i++){
    console.log(locations[i]);
}

console.log("\n..................................................................................\n");

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

locations.reverse();

for(var i=0;i<locations.length;i++){
    console.log(locations[i]);
}