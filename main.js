//Menu fixed Scroll
addEventListener('scroll', () => {
  if (scrollY > 10) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
})
// Mostrar Button para voltar para o home

function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}
addEventListener('scroll', showBackToTopButtonOnScroll)

// Abrir Menu
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
  duration: 1000
}).reveal(`
  #home,
  #services,
  #services header,
  #about,
  `)

ScrollReveal({
  origin: 'left',
  distance: '40px',
  duration: 1000
}).reveal(`#home img,#services .card, #about img, #contact img`)

// Active Menu
// e o active for false
const menuElement = document.querySelector(`.menu`)

addEventListener('scroll', () => {
  if (scrollY > 0 && scrollY < 600) {
    console.log('Esta na Tela Header #Home')
  } else if (scrollY > 600 && scrollY < 1200) {
    console.log('Esta na Tela Service')
  }
})
