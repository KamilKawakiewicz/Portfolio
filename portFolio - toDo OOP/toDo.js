const input = document.querySelector("input");
const ul = document.querySelector(".newTask");
let numberSpn = document.querySelector("#numberToDo span");
const toDo = [];
const li = document.getElementsByTagName("li");

removeLi = (e) => {
    e.target.parentNode.remove();
    toDo.pop(input.value);
    numberSpn.textContent = li.length;
}

active = (e) => {
    e.target.classList.toggle("active");

}

addTask = () => {
    if (!input.value) return alert("Wpisz zadanie")

    let newTask = document.createElement("li");
    newTask.classList.add("newTask");
    newTask.innerHTML = "<button class='done'>Odznacz</button>" + input.value + "<button class='delete'>Usuń</button>";
    toDo.push(input.value);
    ul.appendChild(newTask);
    input.value = "";

    numberSpn.textContent = li.length;

    newTask.querySelector(".delete").addEventListener("click", removeLi);
    newTask.querySelector(".done").addEventListener("click", active);
}





document.querySelector("button").addEventListener("click", addTask);