var sidenav = document.getElementById("sidenav")
var menu = document.getElementById("menu-icon")
var closemenu = document.getElementById("menu-close")
var list = document.getElementById("list-close")

menu.addEventListener("click", function () {
    sidenav.style.marginLeft = "0"
})
closemenu.addEventListener("click", function () {
    sidenav.style.marginLeft = "-50%"
})
list.addEventListener("click", function () {
    sidenav.style.marginLeft = "-50%"
})