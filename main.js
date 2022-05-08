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

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 3000
}).reveal(`
  #home,
  #home img,
  #services,
  #services header,
  #services .card,
  `)
