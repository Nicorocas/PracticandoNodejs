const fs = require('fs');
// el modulo fileSystem nos permite trabajar con los rchivos del OS , cuando creems programas tendremos que usarlo, permite crear nuevos archivos y leerlos

// metodo writeFile(), recibe parametro "nombre del archivo" + "ruta donde se va a crear", "el conetnido de ese archivo", Callback (funcion que se ejecuta cuando a termiando de crearse el archivo)

/// fs es un codigo asincrono, no espera a que termine de ejecutrase el codigo de arriba para continuar el de abajo, en nodejs se ejecuta codigo y cuando termine sigue ejecutando el codigo de dentro de la funcion y el codigo que viene despues de manera asincrona, En este ejemplo nodejs crea un archivo y la orden es para el OS, entonces sigue ejecutando el codigo mientras OS esta creando el archivo. 

fs.writeFile("./TextoPrueba","el modulo fileSystem nos permite trabajar con los rchivos del OS , cuando creems programas tendremos que usarlo, permite crear nuevos archivos y leerlos metodo writeFile(), recibe parametro nombre del archivo + ruta donde se va a crear, el conetnido de ese archivo, Callback (funcion que se ejecuta cuando a termiando de crearse el archivo)", function (err){
    if (err){
        console.log(err)
    }
    else {console.log("archivo creado")}
} )



//creador de index.html
var titulo = "Diseño Webmap 1"
var body = "<h1> Aqui h1 </h1>"
var footer= "<footer> Aqui el Footer </footer>"


fs.writeFile("./index.html",
/// se pueden añadir variables de tipo string para rellenar el doctype
"<!DOCTYPE html> <html> <head>	<script></script> 	<title>"+titulo+"</title> </head> <body>"+body+ footer +"</body> </html>",

function (err){
        if (err){
            console.log(err)
        }
        else {console.log("archivo creado")}
    })