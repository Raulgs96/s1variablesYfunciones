
let userList = []

function obtenerDatos(){
    
    let name = document.getElementById("name").value
    let mail = document.getElementById("mail").value
    let pic = document.getElementById("pic").value
    let id = Date.now()

    let userObject={name, mail, pic, id}
    return userObject;
    
}
    
    let btnGuardar = document.getElementById("btn-guardar")
    btnGuardar.addEventListener("click", () => {
        
        userList.push(obtenerDatos()) 
        console.log(userList)

    })

    const createUserCard = (userList) => {
        
    let userCol = document.createElement("div");
    userCol.classList.add("col");
  
    let userCard = document.createElement("div");
    userCard.classList.add("card");
  
    let userImage = document.createElement("img");
    userImage.classList.add("card-img-top");
    userImage.setAttribute("src", "https://randomuser.me/api/portraits/women/77.jpg");
    userImage.setAttribute("alt", "Foto del usuario");
  
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
  
    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = `${userList.name} ${userList.mail} ${userList.pic}`;
  
    let cardButton = document.createElement("a");
    cardButton.classList.add("btn", "btn-danger");
    //cardButton.setAttribute("href", "#");
    cardButton.innerText = "Delete user";
  
    cardBody.append(cardTitle, cardButton);
  
    userCard.append(userImage, cardBody);
  
    userCol.append(userCard);
    return userCol;
    }

//////EXA
    const printUserCard = (userList) =>{

        let users= document.getElementById("users");
        let userCard = createUserCard(userList);
        users.append(userCard);
          };
    printUserCard(userList)