window.addEventListener("scroll" , onScroll)
onScroll()

function onScroll(){
  showNavOnScroll()
  backToTopButtoOnScroll()
}

function showNavOnScroll() {
  if(scrollY > 0){
    navigation.classList.add("scroll")

  }
  else {
    navigation.classList.remove("scroll")

  }

}

function backToTopButtoOnScroll(){
  if(scrollY > 600){
    backToTopButto.classList.add("show")

  }
  else {
    backToTopButto.classList.remove("show")

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
  duration: 800,
}).reveal('#home , #home , #home .dados ,#services,#services header , #services .card , #sobre , #sobre header , #sobre .content , #sobre img , #contato , #contato .content , #contato img , footer   ');

document.webkitRequestFullscreen();
window.mozRequestFullScreen();