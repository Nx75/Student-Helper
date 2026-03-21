// ================= DRAGGABLE =================
function makeDraggable(element) {
    let isDragging = false;
    let offsetX, offsetY;

    const header = element.querySelector('.window-header');

    header.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - element.offsetLeft;
        offsetY = e.clientY - element.offsetTop;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;

        element.style.left = (e.clientX - offsetX) + "px";
        element.style.top = (e.clientY - offsetY) + "px";
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
    });
}


// ================= CLOCK LOGIC =================
function initClock(clock_windowEl) {
    const btn12 = clock_windowEl.querySelector("#btn-12");
    const btn24 = clock_windowEl.querySelector("#btn-24");
    const time = clock_windowEl.querySelector("#time");
    const ampm = clock_windowEl.querySelector("#abbreviations");
    const date = clock_windowEl.querySelector("#date");
    const day = clock_windowEl.querySelector("#day");

    let is12Hour = true;

    function pad(n) {
        return String(n).padStart(2, "0");
    }

    function updateClock() {
        const now = new Date();

        let h = now.getHours();
        let m = now.getMinutes();
        let s = now.getSeconds();

        let suffix = "";

        if (is12Hour) {
            suffix = h >= 12 ? "PM" : "AM";
            h = h % 12 || 12;
        }

        time.textContent = `${pad(h)}:${pad(m)}:${pad(s)}`;
        ampm.textContent = suffix;
        ampm.style.display = is12Hour ? "block" : "none";

        date.textContent = now.toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });

        day.textContent = now.toLocaleDateString("en-US", {
            weekday: "long"
        });
    }

    setInterval(updateClock, 1000);
    updateClock();

    btn12.addEventListener("click", () => {
        is12Hour = true;
        btn12.classList.add("btn-active");
        btn24.classList.remove("btn-active");
        updateClock();
    });

    btn24.addEventListener("click", () => {
        is12Hour = false;
        btn24.classList.add("btn-active");
        btn12.classList.remove("btn-active");
        updateClock();
    });
}