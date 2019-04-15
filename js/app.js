const header = document.getElementById("header");

header.addEventListener("click", e => {
    const nav = header.querySelector("nav");
    if (e.target.className === "nav__button") {
        nav.classList.toggle("nav--hidden")
    }
}, false)


window.addEventListener("resize", ()=> {
    console.log(screen.width);
})
