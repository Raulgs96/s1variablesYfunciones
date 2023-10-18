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


function palabra (word){
    let wordEven=""
    let wordOdd=""
    for (i=0; i<word.length; i++){
        if (i % 2 == 0){
             wordEven +=word.at(i);""
        } else if (i % 2 == 1){
             wordOdd += word.at(i);""

        }
        
        
    }
    console.log (wordEven, wordOdd)
}
        
       palabra ("onomatopeya")
