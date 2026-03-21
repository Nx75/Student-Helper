const clock = document.getElementById("clock-icon");
const desktop = document.getElementById("desktop");

let clockTemplateCache = null;

clock.addEventListener("click", async () => {
    if (!clockTemplateCache) {
        const clock_response = await fetch("Clock/clock.html");
        const html = await clock_response.text();

        const clock_temp = document.createElement("div");
        clock_temp.innerHTML = html;

        clockTemplateCache = clock_temp.querySelector("#clock-template");
    }

    const clock_clone = clockTemplateCache.content.cloneNode(true);
    const clock_windowEl = clock_clone.querySelector("#desktop-window");

    desktop.appendChild(clock_windowEl);

    makeDraggable(clock_windowEl);
    initClock(clock_windowEl);
});

const todo = document.getElementById("todo-icon");
let todoTemplateCache = null;

todo.addEventListener("click", async () => {
    if (!todoTemplateCache) {
        const todo_response = await fetch("TODO/todo.html");
        const todo_html = await todo_response.text();

        const todo_temp = document.createElement("div");
        todo_temp.innerHTML = todo_html;

        todoTemplateCache = todo_temp.querySelector("#todo-template");
    }

    const todo_clone = todoTemplateCache.content.cloneNode(true);
    const todo_windowEl = todo_clone.querySelector("#desktop-window");

    desktop.appendChild(todo_windowEl);

    makeDraggable(todo_windowEl);
    initTodo(todo_windowEl);
});