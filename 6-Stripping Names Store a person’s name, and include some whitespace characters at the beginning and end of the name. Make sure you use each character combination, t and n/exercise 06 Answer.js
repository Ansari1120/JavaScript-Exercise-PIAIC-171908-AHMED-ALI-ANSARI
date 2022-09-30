// Stripping Names: Store a person’s name, and include some whitespace
//  characters at the beginning and end of the name. Make sure you use each character combination, 
//  "\t" and "\n", at least once. Print the name once, 
// so the whitespace around the name is displayed. Then print the name after striping the white spaces.

var person_name = "   Don_Bradman    ";
console.log("space shown:"+'"'+person_name+'"'); //before space as shown
console.log("space gone:"+'"'+person_name.trim()+'"'); // after space