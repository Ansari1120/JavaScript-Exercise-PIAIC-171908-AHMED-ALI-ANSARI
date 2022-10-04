function show_magicians(magicians){
    for(var magician in magicians) {
        console.log(magician);

    }
}
    

function make_great(magicians){
    var great_magicians = []
    while (magicians){
        magician = magicians.pop()
        great_magician = magician + ' the Great'
        great_magicians.unshift(great_magician)
    }
        

    for (great_magician in great_magicians){
        magicians.unshift(great_magician)

    }
}function show_magicians(magicians){
    for(var magician in magicians) {
        console.log(magician);

    }
}
    

function make_great(magicians){
    var great_magicians = []
    while (magicians){
        magician = magicians.pop()
        great_magician = magician + ' the Great'
        great_magicians.unshift(great_magician)
    }
        

    for (great_magician in great_magicians){
        magicians.unshift(great_magician)

    }
}

   

magicians = ['Sambri jadugar', 'IT clown', 'Happy Clown']
show_magicians(magicians)


make_great(magicians)
show_magicians(magicians)

   

magicians = ['Harry Houdini', 'David Blaine', 'Teller']
show_magicians(magicians)

console.log("\n")
make_great(magicians)
show_magicians(magicians)