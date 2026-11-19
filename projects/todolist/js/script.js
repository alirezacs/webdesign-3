let list = ["First Task", "Second Task", "Third Task", "Fourth Task"];
let taskListTag = document.getElementById("list");
let input = document.getElementById("input");
let create = document.getElementById("create");

const renderTasks = (list) => {
    taskListTag.innerHTML = "";
    list.map(task => {
        taskListTag.innerHTML += `
            <li>
                <input type="checkbox">
                <span>${task}</span>
                <button class="delete-btn">×</button>
            </li>
        `
    })
}

create.addEventListener("click", e => {
    let value = input.value;
    list.push(value);
    input.value = "";
    
    renderTasks(list);
})

renderTasks(list);