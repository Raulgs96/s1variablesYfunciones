///////IMPRIMIR INICIALES DE UN NOMBRE
/*let string = "raul gomez sotelo"
console.log(string)
string =string.split(" ")
string.forEach((string) => {
    console.log(string.substring(0,1).toUpperCase())
})*/


///////PALABRAS NON//////
/*Teniendo en cuenta el siguiente texto: "Si esperas a estar listo, esperarás toda la vida"
Queremos obtener una nueva frase que contenga sólo las palabras en posición non
-> "Esperas estar esperarás la "*/

/*let string = "Si esperas a estar listo, esperarás toda la vida"
console.log(string)
string =string.split(" ")
string.forEach((string, index) => {
    index % 2 === 1 ? console.log(string) : ""
})*/
const usuario=[]
function user (name, age, email ){
    usuario.push({Nombre: name, Edad:age, Correo:email})
return(usuario)
}
const recordUser =(user("raul", 15, "raulgs96@"),user("toño", 20, "antonio1993@"),user("francisco", 30, "francisco69@"))
console.log(usuario)