// menu start
const open = document.getElementById("menuOpenBtn");
const menu = document.getElementById("menu");
const close = document.getElementById("menuCloseBtn");

open.addEventListener("click", () => {
    menu.classList.remove("hidden", "-translate-x-80", "opacity-0")
    menu.classList.add("flex", "-translate-x-0", "opacity-100")
})
close.addEventListener("click", () => {
    menu.classList.remove("flex", "-translate-x-0", "opacity-100")
    menu.classList.add("hidden", "-translate-x-80", "opacity-0")
})
// menu end

document.querySelectorAll('.disabled-image').forEach((img) => {
    img.addEventListener("dragstart", (e) => {
        e.preventDefault();
    })
})
