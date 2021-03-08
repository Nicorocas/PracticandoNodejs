const os = require('os');
// cargamos el modulo os que nos da informacion del sistema operativo, no se referencia con ./ porque ya esta en node.js

console.log(os.platform(), "plataforma");
console.log(os.release(), "version")
console.log("bytes ",os.freemem(), "memoria libre")
console.log("bytes ",os.totalmem(),"Memoria total")
console.log("bytes ",parseInt(os.totalmem())-parseInt(os.freemem()), "memoria en uso")
