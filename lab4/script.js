const el9 = document.getElementById("el9");
const el10 = document.querySelector(".el10");
const addButton = document.getElementById("add");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const deleteButton = document.getElementById("delete");
const link = document.querySelector("#pic a");

let isActive9 = false;
let isActive10 = false;

el9.addEventListener("click", () => {
    isActive9 = !isActive9;
    isActive9 ? el9.classList.add("click-1") : el9.classList.add("click-2");
    isActive9 ? el9.classList.remove("click-2") : el9.classList.remove("click-1");
});

el10.addEventListener("click", () => {
    isActive10 = !isActive10;
    isActive10 ? el10.classList.add("click-1") : el10.classList.add("click-2");
    isActive10 ? el10.classList.remove("click-2") : el10.classList.remove("click-1");
});

addButton.addEventListener("click", () => {
    const box = document.createElement("div");
    box.classList.add("img-box");

    const img = document.createElement("img");
    img.src = "img/lviv.jpg";
    img.alt = "Фото міста Львів";

    box.appendChild(img);
    link.appendChild(box);
});

plusButton.addEventListener("click", () => {
    const box = link.lastElementChild;
    if (box) {
        const img = box.querySelector("img");
        let scale = parseFloat(img.dataset.scale) || 1;
        scale += 0.2;
        img.dataset.scale = scale;
        img.style.transform = `scale(${scale})`;
    }
});

minusButton.addEventListener("click", () => {
    const box = link.lastElementChild;
    if (box) {
        const img = box.querySelector("img");
        let scale = parseFloat(img.dataset.scale) || 1;
        if (scale > 1.2) {
            scale -= 0.2;
            img.dataset.scale = scale;
            img.style.transform = `scale(${scale})`;
        }
    }
});

deleteButton.addEventListener("click", () => {
    if (link.lastElementChild) {
        link.lastElementChild.remove();
    }
});