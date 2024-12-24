let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('bx-x'); //Switch Icon
    navlist.classList.toggle('open'); //Open Menu
}