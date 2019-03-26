class Variables {
    constructor() {
        this.input = document.querySelector("input")
        this.ul = document.querySelector(".newTask");
        this.numberSpn = document.querySelector("#numberToDo span");
        this.toDo = [];
        this.li = document.getElementsByTagName("li");
    }
}
class MainFunc extends Variables {
    constructor() {
        super()
    }
    addTask() {
        if (!this.input.value) return
        let newTask = document.createElement("li");
        newTask.classList.add("newTask");
        newTask.innerHTML = "<button class='done'>Odznacz</button>" + this.input.value + "<button class='delete'>Usuń</button>";
        this.ul.appendChild(newTask);

        this.toDo.push(this.input.value)
        this.input.value = "";
        this.numberSpn.textContent = this.li.length;
        newTask.querySelector(".delete").addEventListener("click", this.removeLi.bind(this));
        newTask.querySelector(".done").addEventListener("click", this.active.bind(this));
    }
    removeLi(e) {
        e.target.parentNode.remove();
        this.numberSpn.textContent = this.li.length;
    }
    active(e) {
        e.target.classList.toggle("active");
    }
}
class Invoke extends MainFunc {
    constructor() {
        super()
        document.querySelector("button").addEventListener("click", this.addTask.bind(this));
    }
}

const add = new Variables();
const add2 = new MainFunc();
const add3 = new Invoke();