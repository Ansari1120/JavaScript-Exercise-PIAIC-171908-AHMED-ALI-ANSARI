var name = "AHMED ALI ANSARI";
//lowercase
console.log(name.toLowerCase());
name="ahmed ali ansari";
//Uppercase
name=name.toUpperCase();
console.log(name);
//titlecase each character of a word goes capital
function Capitalize(change_name){
    change_name =  change_name.toLowerCase().split(' ');  
    for(var i=0 ; i < change_name.length; i++){
        change_name[i] = change_name[i].charAt(0).toUpperCase() + change_name[i].slice(1); 
    }
    return change_name.join(' ');
}
console.log(Capitalize(name));

var change_name1 =  change_name1.toLowerCase().split(' ');  
change_name1="Ahmed ali ansari";
console.log(change_name1);