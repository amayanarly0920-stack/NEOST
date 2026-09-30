const a = document.querySelector("#a");
const o = document.querySelector("#o");
const i = document.querySelector("#i");
const e = document.querySelector("#e");
const u = document.querySelector("#u");
const b = document.querySelector("#b");
const titulo = document.querySelector("#titulo");

window.addEventListener("scroll", () => {
    let scroll = window.scrollY;

    a.style.left = scroll * 2 + "px";
    o.style.left = scroll * 0.5 + "px";

    i.style.bottom = scroll * -2 + "px";
    i.style.right = scroll * 2 + "px";

    e.style.right = scroll * 2 + "px";
    u.style.left = scroll * 1 + "px";
    b.style.right = scroll * 2 + "px";
    titulo.style.right = scroll * 4 + "px";
})
