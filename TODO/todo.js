function initTodo(root) {
    const inputBox = root.querySelector("#input-box");
    const listContainer = root.querySelector("#list-container");
    const completedCounter = root.querySelector("#completed-counter");
    const uncompletedCounter = root.querySelector("#uncompleted-counter");

    function createTask(taskText, isCompleted = false) {
        const li = document.createElement("li");

        li.innerHTML = `
        <label>
          <input type="checkbox" ${isCompleted ? "checked" : ""}>
          <span>${taskText}</span>
        </label>
        <span class="edit-btn">Edit</span>
        <span class="delete-btn">Delete</span>
        `;

        if (isCompleted) li.classList.add("completed");

        const checkbox = li.querySelector("input");
        const editBtn = li.querySelector(".edit-btn");
        const deleteBtn = li.querySelector(".delete-btn");
        const taskSpan = li.querySelector("label span");

        checkbox.addEventListener("click", () => {
            li.classList.toggle("completed", checkbox.checked);
            saveData();
            updateCounters();
        });

        editBtn.addEventListener("click", () => {
            const update = prompt("Edit task:", taskSpan.textContent);
            if (update && update.trim()) {
                taskSpan.textContent = update;
                li.classList.remove("completed");
                checkbox.checked = false;
                saveData();
                updateCounters();
            }
        });

        deleteBtn.addEventListener("click", () => {
            li.remove();
            saveData();
            updateCounters();
        });

        listContainer.appendChild(li);
    }

    function addTask() {
        const task = inputBox.value.trim();
        if (!task) return alert("Please write down a task");

        createTask(task);
        inputBox.value = "";
        saveData();
        updateCounters();
    }

    function saveData() {
        const tasks = [];
        listContainer.querySelectorAll("li").forEach(li => {
            const text = li.querySelector("label span").textContent;
            const completed = li.classList.contains("completed");
            tasks.push({ text, completed });
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function loadData() {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        listContainer.innerHTML = "";
        tasks.forEach(task => createTask(task.text, task.completed));
    }

    function updateCounters() {
        const completedTasks = listContainer.querySelectorAll(".completed").length;
        const uncompletedTasks = listContainer.querySelectorAll("li:not(.completed)").length;

        completedCounter.textContent = completedTasks;
        uncompletedCounter.textContent = uncompletedTasks;
    }

    root.querySelector("#input-button").addEventListener("click", addTask);

    loadData();
    updateCounters();
}