const icon = document.getElementById("clock-icon");
const desktop = document.getElementById("desktop");

let clockTemplateCache = null;

icon.addEventListener("click", async () => {
    if (!clockTemplateCache) {
        const response = await fetch("Clock/clock.html");
        const html = await response.text();

        const temp = document.createElement("div");
        temp.innerHTML = html;

        clockTemplateCache = temp.querySelector("#clock-template");
    }

    const clone = clockTemplateCache.content.cloneNode(true);
    const windowEl = clone.querySelector("#desktop-window");

    desktop.appendChild(windowEl);

    makeDraggable(windowEl);
    initClock(windowEl);
});

