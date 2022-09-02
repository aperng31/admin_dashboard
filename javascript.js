
const buttonClick = document.querySelectorAll('.button');

buttonClick.forEach(elem => elem.addEventListener('mousedown', mdown));
buttonClick.forEach(elem => elem.addEventListener('mouseup', mup));

function mdown() {
    this.classList.add('clicked');
}
function mup() {
    this.classList.remove('clicked');
}

let myName = 'Alan Perng'

const name = document.querySelectorAll('.name');
console.log(name);
name.forEach(elem => elem.innerHTML = myName);