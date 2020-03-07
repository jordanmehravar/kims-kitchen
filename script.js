const checkbox = document.getElementById('checkbox')
const menu = document.querySelector('.nav-menu')
const notMenu = document.querySelector('.hide-nav-menu')

menu.addEventListener('transitionend', (event) => {
    notMenu.style.pointerEvents = 'auto';
    notMenu.addEventListener('click', hideMobileNav);
})

function hideMobileNav() {
    checkbox.checked = false;
    notMenu.removeEventListener('click', hideMobileNav);
    notMenu.style.pointerEvents = 'none'
}