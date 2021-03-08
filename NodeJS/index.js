/// las aplicaciones se crean en modulos y cada uno tiene una tarea, en este caso vamos acrear una app que tenga la funcionalidad en multiples archivos
/// este sera el archivo principal del proyecto, 

const mates = require("./mates")//se llama al otro script con un require
console.log(mates)// la mejor forma de ver que importa un modulo

console.log(mates.Sum(4,56))// constante.Funcion_de_Script()
console.log(mates.Rest(23,78))
console.log(mates.Sum(mates.Rest(mates.Mult(1,3),5),10))