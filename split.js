
function evenOdd (prhrase){
    let even=0
    let odd=0
    let array =  prhrase.split(" ")
    for (let i=0; i<array.length; i++){
        array[i].length%2 ==0 ? even+=1: odd+=1
    }
    return{
        pares:even,
        nones:odd
    }

}
console.log(evenOdd("la mejor forma de predecir el futuro es creandolo"))