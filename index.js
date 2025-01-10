var offer = document.getElementById("offer")
var offerclose = document.getElementById("offer-close")

offerclose.addEventListener("click", function () {
    offer.style.display = "none"
})

//side nav
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