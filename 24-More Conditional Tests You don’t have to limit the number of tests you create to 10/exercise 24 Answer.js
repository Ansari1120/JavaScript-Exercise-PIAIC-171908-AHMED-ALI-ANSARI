//If you want to try more comparisons, 
// write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

let Name = "weekends";
let check;
if(Name === "ahmed"){
    check = true;
    console.log("You'r Right ! "+check);
}
else if(Name !== "ahmed"){
    check = false;
    console.log("wrong guess of name ! "+check);
}

// • Tests using the lower case function
if(Name.toLowerCase() === Name){
    check = true;
    console.log("\nthe name is in lower case "+check);
}
else{
    check = false;
    console.log("\nthe name is not in lowercase "+check);
}

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to


var numerical_value = 45;

if(numerical_value == "45"){
    console.log("\nYou're right");
}
 if(numerical_value !== 45){
    console.log("\nbetter luck next time !");
}
 if(numerical_value > 30 && numerical_value < 70){
    console.log("\nthis is true !");
}
 if(numerical_value >= 44 && numerical_value < 30){
    console.log("\nthis is not true !");
}

//• Tests using "and" and "or" operators

let marks = 351;
let compulsory_subject = "math"
if(marks === 351 && compulsory_subject === "math"){
    console.log("\nyou're passed !");
}
if(marks === 351 || compulsory_subject === "Science"){
    console.log("you need to write an application for promotion");
}
else{
    console.log("no chance to go in next class you're failed");
}

// • Test whether an item is in a array

let test_ano =["curran","maxo","rudolf","Samoa","jannifer"];  // a variable check !
var vari_length = test_ano.length;
// for(var i =0 ; i < vari_length;i++){
// if(test_ano[i]==="Samoa"){
//     check = true;
//    console.log(check);
//    break;
// }
// }
// • Test whether an item is not in a array

for(var i2 = 0 ; i2 < vari_length;i2++){
    if(test_ano[i2] !=="michell"){
        check = true;
        console.log(check);
        break;
    }
    }

