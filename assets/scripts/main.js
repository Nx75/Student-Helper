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

const pomodoro = document.getElementById("pomodoro-icon");
let pomodoroTemplateCache = null;

pomodoro.addEventListener("click", async () => {
    if (!pomodoroTemplateCache) {
        const pomodoro_response = await fetch("Pomodoro/pomodoro.html");
        const pomodoro_html = await pomodoro_response.text();

        const pomodoro_temp = document.createElement("div");
        pomodoro_temp.innerHTML = pomodoro_html;

        pomodoroTemplateCache = pomodoro_temp.querySelector("#pomodoro-template");
    }

    const pomodoro_clone = pomodoroTemplateCache.content.cloneNode(true);
    const pomodoro_windowEl = pomodoro_clone.querySelector("#desktop-window");

    desktop.appendChild(pomodoro_windowEl);

    makeDraggable(pomodoro_windowEl);
    initPomodoro(pomodoro_windowEl);
}); 

const notes = document.getElementById("notes-icon");
let notesTemplateCache = null;

notes.addEventListener("click", async () => {
    if (!notesTemplateCache) {
        const notes_response = await fetch("notes/notes.html");
        const notes_html = await notes_response.text();

        const notes_temp = document.createElement("div");
        notes_temp.innerHTML = notes_html;

        notesTemplateCache = notes_temp.querySelector("#notes-template");
    }

    const notes_clone = notesTemplateCache.content.cloneNode(true);
    const notes_windowEl = notes_clone.querySelector("#desktop-window");

    desktop.appendChild(notes_windowEl);

    makeDraggable(notes_windowEl);
    initNotes(notes_windowEl);
});