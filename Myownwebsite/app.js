const hamburgerToggle = document.querySelector(".hamburger")
const HamburgerMenuSlider = document.querySelector(".menu-content")

function ToggleHamburgerMenu(){
    console.log("clicked")
    HamburgerMenuSlider.classList.toggle("isactive")
}
hamburgerToggle.addEventListener("click",ToggleHamburgerMenu)


