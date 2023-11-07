let todos = [
  {
    title: "Completar tarea 1",
    dueDate: "2023-11-10",
    completed: false,
  },
  {
    title: "Ir de compras",
    dueDate: "2023-11-15",
    completed: true,
  },
  {
    title: "Estudiar para el examen",
    dueDate: "2023-11-20",
    completed: false,
  },
  {
    title: "Hacer ejercicio",
    dueDate: "2023-11-25",
    completed: true,
  },
  {
    title: "Llamar a mamá",
    dueDate: "2023-11-30",
    completed: false,
  },
  {
    title: "Terminar proyecto",
    dueDate: "2023-12-05",
    completed: false,
  },
  {
    title: "Limpiar la casa",
    dueDate: "2023-12-10",
    completed: true,
  },
  {
    title: "Preparar la cena",
    dueDate: "2023-12-15",
    completed: false,
  },
  {
    title: "Leer un libro",
    dueDate: "2023-12-20",
    completed: false,
  },
  {
    title: "Hacer una caminata",
    dueDate: "2023-12-25",
    completed: true,
  },
]
const createToDoList = ()=>{
let listGroup = document.createElement("li")
listGroup.classList.add("list-group-item")
let divCheck = document.createElement("div")
divCheck.classList.add("form-check","form-switch", "form-check-reverse")
let inputCheck = document.createElement("input")
inputCheck.classList.add("form-check-input")
inputCheck.setAttribute("type","checkbox")
inputCheck.checked = todos.completed
inputCheck.setAttribute("id","flexSwitchCheckReverse")
let labelCheck = document.createElement("label")
labelCheck.classList.add("form-check-label")
labelCheck.setAttribute("for","flexSwitchCheckReverse")
labelCheck.innerText = `Tarea: ${todos.title} Vence: ${todos.dueDate}`
divCheck.append(inputCheck,labelCheck)
listGroup.append(divCheck)
todos.completed === true ? listGroup.classList("border", "border-success", "bg-success", "bg-gradient", "text-white") : listGroup.classList("border", "border-danger", "bg-danger", "bg-gradient", "text-white")
return listGroup
}
const printToDo = (todosData) => {
let listChecks = document.getElementById("listChecks");
let listToDo = createCheckList(todosData);
listChecks.append(listToDo);
};
const printAllToDo = (toDoArray) => {
// listChecks.innerHTML = "";
// let listChecks = document.getElementById("listChecks");
toDoArray.forEach((toDo) => {
  createCheckList(toDo);
});
};















