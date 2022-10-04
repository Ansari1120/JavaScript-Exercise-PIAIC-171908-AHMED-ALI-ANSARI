// Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array.

function show_magicians(){

    for(var i in arr){
        console.log(arr[i]);
    }
}
var arr = ["abra","katabra","buha","zuha"];
show_magicians(arr);