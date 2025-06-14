// Navbar Responsive

const menuBTN = document.querySelector("nav .bx-menu")
const links = document.querySelector("nav .links")

let menuIsOpen = false

menuBTN.addEventListener("click", function() {
  menuIsOpen = !menuIsOpen
  if (menuIsOpen === true) {
    links.style.display = "flex"
  }
  if (menuIsOpen === false) {
    links.style.display = "none"
  }
})
