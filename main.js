/*console.log("hola koders")
let a= 7
let b=5

let suma= a+b
let resta= a-b
let multiplicacion= a*b
let division= a/b
let modulo= a%b


console.log("Resultado de la suma es:" +suma)
console.log("Resultado de la resta es:"+ resta)
console.log("Resultadode la multiplicacion  es:"+ multiplicacion)
console.log("Resultado de la division es:"+ division)
console.log("Resultado del modulo es:"+ modulo)*/

/*function suma(a, b){
    let resultsuma = a+b;
    return resultsuma
}

function resta(a, b){
let resultresta= a-b;
    return resultresta
}
function multiplicacion(a, b){
    let resultmultiplicacion= a*b;
    return resultmultiplicacion
}
function division(a, b){
    let resultdivision=a/b;
    return resultdivision
}
function modulo(a, b){
    let resultmodulo=a%b;
    return resultmodulo
}
function mayorque(a,b){
    if (a>b){
        return " A Mayor";
    } else if (a<b){
        return " B Mayor";
    } else{
        return "son iguales";
    }
    
}
function parOnone (a){
    if(a%2===0){
        return "Par"
    } else {
        return "none"
    }
}

console.log(suma(10,20))
console.log(resta(10,20))
console.log(multiplicacion(10,20))
console.log(division(10,20))
console.log(modulo(10,20))
console.log(mayorque(20,20))
console.log(parOnone(8)) */

/////////////////////////////////////EJERCICIOS EN CLASE///////////////////////////////////////////////////
//////////////////////////////////////////////PRACTICA ESPECIES/////////////////////////////////////////////////////////////

let pet
function petName (pet) {
   
        if (pet=="perro"){
            return "Tu perro se podria llamar Milaneso";
        } else if (pet=="gato"){
            return "Tu gato se podria llamar Michiflais";
        } else if (pet=="ave"){
                return "Tu ave se podria llamar piolin";
        } else{
            return "No conozco la especie";
        }
        
}
console.log(petName("pato"))
///////////////////////////////////////////PRACTICA DADOS////////////////////////////////////////////////////////////////
let dado1, dado2
function tirarDado (dado1, dado2){
    if ((dado1>=1 && dado1<=6) && (dado2>=1 && dado2<=6)){
        if ((dado1==2 && dado2==2) || (dado1==4 && dado2==6) || ( dado1==1 && dado2==1) || (dado1==6 && dado2==4)){
            return "GANASTE"
        } else  {
            return "SUERTE PARA LA PROXIMA PERDEDOR"
        } 
    } else {
        return "NUMEROS INVALIDOS"
    }
}

console.log (tirarDado(5,3))