window.onload = function () {
    /* Nav Menu */
    const btn = document.getElementById("menu-btn");
    const close = document.getElementById("close");
    const menu = document.getElementById("nav-container");

    btn.addEventListener("click", () => {
        menu.style.display = "flex";
        menu.classList.add("active");
    })

    close.addEventListener("click", () => {
        menu.style.display = "none";
        menu.classList.remove("active");
    })
}

