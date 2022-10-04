function make_sandwich(items){
    console.log("I'll make you a great sandwich:\n");
    for (var item in items){
        console.log("  ...adding " + item + " to your sandwich.");
        break;

    }
    console.log("Your sandwich is ready!");
}
    
make_sandwich('beef slices', 'Katchup', 'chatni')
make_sandwich('Chineese salt', 'black paper', 'whhite paper')
make_sandwich('Mayonise', 'red chatni')