function show_magicians(magicians){
    for (var magician in magicians){
        console.log(magician)

    }
}
function make_great(magicians){
    var magician;
    var great_magician;
    var great_magicians = []

    while (magicians){
        magician = magicians.pop();
        great_magician = magician + "  the Greatest "
        great_magicians.unshift(great_magician);
    }
    for (great_magician in great_magicians){
        magicians.unshift(great_magician)

    }

    return magicians
}
    magicians = ['Sambri jadugar', 'IT clown', 'Happy Clown']
    show_magicians(magicians)

console.log("Great magicians:\n")
great_magicians = make_great(magicians)
show_magicians(great_magicians)

console.log("Old magicians:\n")
show_magicians(magicians)