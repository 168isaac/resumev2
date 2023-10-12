const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarToggler')
const bsCollapse = new bootstrap.Collapse(menuToggle, {
    toggle: false
})
navLinks.forEach((l) => {
    l.addEventListener('click', () => {
        if (bsCollapse._isShown()) {
            bsCollapse.hide()
        }
    })
})