// BEWARE: If you change the menuItems array here, you must also change the menuItems array in the file data/menuItems.js
const menuItems = [
  { id: 'home', label: 'Home' },
  { id: 'servizi', label: 'Servizi' },
  { id: 'preventivo', label: 'Preventivo' },
  { id: 'contatti', label: 'Contatti' },
]

menuItems.forEach((item) => {
  const link = document.querySelector(`a[href="/#${item.id}"]`)
  link.addEventListener('click', (event) => {
    event.preventDefault()
    const section = document.querySelector(`#${item.id}`)
    section.scrollIntoView({ behavior: 'smooth' })
  })
})
