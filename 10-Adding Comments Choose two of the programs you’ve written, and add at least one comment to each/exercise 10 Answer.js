var num; //global variable
//number guess game a random number is entered to check lucky draw
function guess_a_number(){
    if(num===4){  // checking number possibility
        console.log("bingo !"); // printed when possibility matched !
        return num;
    }
    else{
        console.log("better luck next time !"); // printed if possibility is failed to meet !
        return -1;
    }
}
var guess = Math.random() * 7;
console.log(guess.toFixed());
guess_a_number(guess); // calling a function and passing argument init stored in guess variale


//input user data and print it into the console.
function input_data(data){
   console.log("your input is : "+data);
}
input_data("see you there !");