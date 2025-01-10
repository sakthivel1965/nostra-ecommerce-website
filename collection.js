var offer = document.getElementById("offer")
var offerclose = document.getElementById("offer-close")

offerclose.addEventListener("click", function () {
    offer.style.display = "none"
})



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


//search functionality
document.addEventListener("DOMContentLoaded", function () {

    var search = document.getElementById("search-section")
    var collection = document.getElementById("collection-section")
    var product = collection.querySelectorAll("div")

    search.addEventListener("keyup", function () {
        var enteredvalue = event.target.value.toUpperCase()
        for (var count = 0; count < product.length; count = count + 1) {
            var productname = product[count].querySelector("p").textContent
            if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
                product[count].style.display = "none"
            }
            else {
                product[count].style.display = "block"
            }
        }
    })
})