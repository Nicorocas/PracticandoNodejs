Apuntes de los wenos:
Para utilizar archivos js desde el CPU se necesita instalar nodeJS
desde la consola de comandos, en el cd donde se encuentre el archivo se escribe node nombre_archivo.js y se ejecuta, 

para separar los scripts en mas de uno y poder llamarlos en un mismo script se utiliza una funcion require(./Nombre_archivo.js), oara ello se crea una const que tenga recogidos los datos del require, ademas en el archivo que se va a compartir se tiene que utilizar la palabra reservada exports.Funcion_que_sea

otra forma de exportar es creando un modulo de formulas, añadiendola como propiedades a un objeto vacio, y despues con la palabra reservada module.exports, se exporta el modulo entero de formulas en vez de exportar formula a formula