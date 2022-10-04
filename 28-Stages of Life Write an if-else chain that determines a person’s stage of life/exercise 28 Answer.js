var person = 24;

//• If the person is less than 2 years old, print a message that the person is a baby.

if(person < 2 ){
    console.log("person is a baby");
}

//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

else if(person >= 2 && person < 4){
    console.log("person is a toddler");
}

//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

else if(person >= 4 && person < 13){
    console.log("person is a kid");
}

//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

else if(person >= 13 && person < 20){
    console.log("person is a teenager");
}

//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

else if(person >= 20 && person < 65){
    console.log("person is a adult");
}

//• If the person is age 65 or older, print a message that the person is an elder.

else if(person >= 65){
    console.log("person is a adult");
}