// Print a statement describing each test and your prediction for the results of each test. 

// Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

//• Look closely at your results, and make sure you understand why each line evaluates to True or False.

let car = 'subaru';
if(car=='subaru'){
    console.log("true !");
}
else{
    console.log("false !");
}

//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let test =["curran","maxo","rudolf","Samoa","jannifer"];  // a variable check !

let check = true; // initially check is positive

for(var i =0 ; i< 10;i++ ){
    if(test[i]==="Samoa"){
        check = true;
       console.log(check);
    }
else if(test[i]==="rudolf"){
    check = true;
    console.log(check);
}
else if(test[i]==="curran"){
    check = true;
    console.log(check);
}
else if(test[i]==="jannifer"){
    check = true;
    console.log(check);
}
else if(test[i]==="maxo"){
    check = true;
    console.log(check);
}
else if(test[i]==="Yasir"){
    check = false;
    console.log(check);
}
else if(test[i]==="Haris"){
    check = false;
    console.log(check);
}
else if(test[i]==="wasif"){
    check = false;
    console.log(check);
}
else if(test[i]==="Umair"){
    check = false;
    console.log(check);
}
else{
    check = false;
    console.log(check);
}
}