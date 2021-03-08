


function Sum(x,y) {
    return x+y
}
function Rest(x,y) {
    return x-y
}
function Mult(x,y) {
    return x*y
}
function Div(x,y) {
    if (y== 0){
        console.log("no se puede dividir por cero")
    }
    else{
        return x/y
    }
    
}
/// otra forma de exportar es creando un modulo de formulas, añadiendola como propiedades a un objeto vacio
const Mates = {};

Mates.Sum = Sum
Mates.Rest= Rest
Mates.Mult = Mult
Mates.Div= Div
/// despues con la palabra reservada module.exports, se exporta de todo, un objeto o una funcion o lo que zea
module.exports=Mates

/// otra forma de exportar es con la palabra reservada exports que solo exporta funciones
// exports.Sum= Sum;
// exports.Rest= Rest;
// exports.Div= Div;
// exports.Mult= Mult;
