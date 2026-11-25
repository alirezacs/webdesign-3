let list = JSON.parse(localStorage.getItem('tasksList')) || [];
let taskListTag = document.getElementById("list");
let input = document.getElementById("input");
let create = document.getElementById("create");

const deleteTask = (value) => {
    
    list = list.filter(task => {
        return task !== value;
    });

    localStorage.setItem("tasksList", JSON.stringify(list))
    renderTasks(list)
}

const editTask = (value) => {
    let newValue = prompt("اسم جدید رو وارد کن:", value);

    if (newValue === null || newValue === "") {
        return;
    }

    list = list.map(task => {
        if (task === value) {
            return newValue;
        }
        return task;
    });

    localStorage.setItem("tasksList", JSON.stringify(list));
    renderTasks(list);
}

const renderTasks = (list) => {
    taskListTag.innerHTML = "";
    list.map((task) => {
        taskListTag.innerHTML += `
            <li>
                <input type="checkbox">
                <span>${task}</span>
                <button class="edit-btn" onclick="editTask('${task}')">e</button>
                <button class="delete-btn" onclick="deleteTask('${task}')">×</button>
            </li>
        `
    })
}

create.addEventListener("click", e => {
    let value = input.value;

    list.push(value);

    localStorage.setItem("tasksList", JSON.stringify(list))

    input.value = "";
    
    renderTasks(list);
})

renderTasks(list);