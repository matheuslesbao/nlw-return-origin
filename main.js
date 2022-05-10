//Menu fixed
addEventListener('scroll', () => {
  if (scrollY > 10) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
})
// Evento de Click no menu
// let bodyMenu = document.getElementById('bodyMenu')
let btnMenuMobile = document.querySelector('.open-menu')
let btnMenuMobileClose = document.querySelector('.close-menu')
// Abrir Menu
btnMenuMobile.addEventListener('click', () => {
  if ((bodyMenu.classList.contains = true)) {
    bodyMenu.classList.toggle('menu-expanded')
  }
})
// Fechar menu
function closeMenu() {
  if ((bodyMenu.classList.contains = true)) {
    document.body.classList.toggle('menu-expanded')
  }
}
btnMenuMobileClose.addEventListener('click', closeMenu)

// ScrollReveal

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 2000
}).reveal(`
  #home,
  #services,
  #services header,
  #about,
  `)

ScrollReveal({
  origin: 'left',
  distance: '40px',
  duration: 2000
}).reveal(`#home img,#services .card, #about img`)
