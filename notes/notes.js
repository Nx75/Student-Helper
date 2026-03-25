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
function initNotes(root){
    const note = root.querySelector("#note");

    if (!note) return;

    note.value = localStorage.getItem("sticky-note") || "";

    note.addEventListener("input", ()=>{
        localStorage.setItem("sticky-note", note.value);
    });
}
