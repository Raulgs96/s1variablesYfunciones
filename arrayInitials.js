let koders = [
    {
      name: "Said ",
      lastname:"Barrera",
      lastname1:"Gonzales",
    },
    {
      name: "Helena",
      lastname: "Fuentes",
      lastname1:"jimenez",
    },
    {
      name: "Gerardo ",
      lastname:"Cabrera",
      lastname1:"Herrera",
    },
    {
      name: "Brenda",
      lastname:"Guerrero",
      lastname1:"Aranda",
    },
    {
      name: "Alejandro",
      lastname:"Fuentes",
      lastname1:"Salgado",
    },
    {
      name: "Sandra ",
      lastname:"Tellez",
      lastname1:"Flores",
    },
  ];

  koders.forEach((item, index, arr) => { 
    console.log(item);
  });
 

  let initials = koders.map(function(element){
    return `${element.name.charAt(0)} ${element.lastname.charAt(0)} ${element.lastname1.charAt(0)}`;
})

console.log(initials);

     
