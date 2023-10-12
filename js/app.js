const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarTogglerDemo03')
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