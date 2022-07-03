let burgerIcon = document.getElementById("burgerIcon");
let closeIcon = document.getElementById("closeIcon");
let navLinks = document.getElementById("navLinks");
let dropMenu = document.getElementById("dropMenu");
let body = document.getElementById("body");

function showMenu() {
    burgerIcon.style.display = "none";
    closeIcon.style.display = "flex";
    navLinks.style.display = "flex"
}

function closeMenu() {
    closeIcon.style.display = "none";
    burgerIcon.style.display = "flex";
    navLinks.style.display = "none"
}

function showDropMenu() {
    dropMenu.style.display = "block";
    dropMenu.style.top = "50px";
    if(body.style.width < "767px")
    {
        navLinks.style.height = "460px";
    }
    
}