function make_car(manufacturer, model,options){
    var value;
    car = {
        'manufacturer': manufacturer,
        'model': model,
        }
    for(var option in options){
        
        car[option] = value;

    }
    return car

}
   
var Mustang = make_car('subaru', 'outback', color='blue', tow_package = "True")
console.log(Mustang);

var Audi = make_car('honda', 'accord', year=1991, color='white',
        headlights='popup')
console.log(Audi);