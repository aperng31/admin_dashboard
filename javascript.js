
const sidebarClick = document.querySelectorAll('.button');

sidebarClick.forEach(elem => elem.addEventListener('mousedown', mdown));
sidebarClick.forEach(elem => elem.addEventListener('mouseup', mup));

function mdown() {
    this.classList.add('clicked');
}
function mup() {
    this.classList.remove('clicked');
}