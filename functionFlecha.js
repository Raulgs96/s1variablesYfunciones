/*function getTriangleArea(base, height) {
    let area = (base * height) / 2;
    return area;
  }
  
  function checkIfIsEven(number) {
    let result = number % 2 === 0;
    return result;
  }
  
  function getRandomKoder(kodersArray) {
    let number = Math.floor(Math.random() * kodersArray.length);
    let koder = kodersArray[number];
    return koder;
  }*/
//GET TRIANGLE AREA
const getTriangleArea = (base, height) => base * height /2;
console.log(getTriangleArea(5,5))

// CHECK NUMBER
const checkIfIsEven = number => number % 2===0 ;
console.log(checkIfIsEven(4))

// GET RANDOM KODER

  /*function getRandomKoder(kodersArray) {
    let number = Math.floor(Math.random() * kodersArray.length);
    let koder = kodersArray[number];
    return koder;*/
    kodersArray = [
        "raul",
        "jorge",
        "jair",
        "aaroon",
        "pedro",
        "santiago"

    ]
const getRandomKoder = (kodersArray) =>  kodersArray[Math.floor(Math.random() * kodersArray.length)];
 
console.log(getRandomKoder(kodersArray))

