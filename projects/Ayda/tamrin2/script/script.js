
let list = ["First Task", "Second Task", "Third Task", "Fourth Task"];


let taskListTag = document.getElementById("list");
let input = document.getElementById("input");
let create = document.getElementById("create");


const renderTasks = (list) => {
    taskListTag.innerHTML = "";


    list.forEach((task, index) => {
        taskListTag.innerHTML += `
            <li>
                <span>${task}</span>
                <div class="btn-group">
                    <button class="edit-btn" data-index="${index}">e</button>
                    <button class="delete-btn" data-index="${index}">×</button>
                </div>
            </li>
        `;
    });
}


create.addEventListener("click", () => {
    let value = input.value.trim();

    if (value !== "") {
        list.push(value);
        input.value = "";
        renderTasks(list);
    }
});


taskListTag.addEventListener("click", (event) => {


    if (event.target.classList.contains("delete-btn")) {
        let index = event.target.dataset.index;
        list.splice(index, 1);
        renderTasks(list);
    }


    if (event.target.classList.contains("edit-btn")) {
        let index = event.target.dataset.index;
        let currentName = list[index];


        let newName = prompt("Please edit your name: ", currentName);


        if (newName !== null && newName.trim() !== "") {
            list[index] = newName.trim();
            renderTasks(list);
        }
    }
});


input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        create.click();
    }
});


renderTasks(list);