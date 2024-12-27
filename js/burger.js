function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

window.onclick = function(event) {
    const menu = document.getElementById("dropdownMenu");
    if (!event.target.closest('.nav__logo') && menu.style.display === "block") {
        menu.style.display = "none";
    }
}
