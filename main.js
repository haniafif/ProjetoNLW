function onscroll() {
  if(scrollY > 0){
    navigation.classList.add("scroll")

  }
  else {
    navigation.classList.remove("scroll")

  }

}

function expandir(){
  document.body.classList.add("menu-expanded")
}

function closemenu(){
  document.body.classList.remove("menu-expanded")
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1300,
}).reveal('#home , #home , #home .dados ,#services,#services header , #services .card');