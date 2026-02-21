const menuButton = document.getElementById('menu-btn')
const mobileMenu = document.getElementById('mobile-menu')

if (menuButton && mobileMenu) {
  const navLinks = mobileMenu.querySelectorAll('[data-nav-link]')

  const setMenuState = (isOpen) => {
    menuButton.setAttribute('aria-expanded', String(isOpen))
    menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu')
    mobileMenu.setAttribute('aria-hidden', String(!isOpen))
    mobileMenu.classList.toggle('hidden', !isOpen)
  }

  const toggleMenu = () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true'
    setMenuState(!isOpen)
  }

  menuButton.addEventListener('click', toggleMenu)

  navLinks.forEach((link) => {
    link.addEventListener('click', () => setMenuState(false))
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMenuState(false)
    }
  })
}
