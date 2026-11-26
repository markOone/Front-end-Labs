var el9 = document.getElementById("el9");
var el10 = document.querySelector(".el10");

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