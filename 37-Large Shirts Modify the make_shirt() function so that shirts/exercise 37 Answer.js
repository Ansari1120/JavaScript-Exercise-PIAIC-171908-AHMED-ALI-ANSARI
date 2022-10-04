// function so that shirts are large by default with a message
//  that reads I love JavaScript. Make a large shirt and a medium
//   shirt with the default message,
//  and a shirt of any size with a different message.



function make_shirt(def_message,shirt){
    var size = "17";
    var message = "Tapout garments";
    var def_message = "I love javascript";
    console.log("\nthe t shirt of size"+shirt);
    console.log("\nthat why i love "+def_message);
    return console.log("\nthis is my workout shirt from : " +message + "\n shirt of size :" +size+'"');
}
make_shirt("JS","Large");
make_shirt("mindset wont be ","small");
