console.log("hola koders")
function suma(a, b){
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
console.log(mayorque(30,20))
console.log(parOnone(8)) 





