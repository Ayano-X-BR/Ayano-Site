let botaoMenu = document.querySelector('#botao-menu');
let mobile_menu = document.querySelector('#mobile-menu');
botaoMenu.addEventListener('click', () => {
    mobile_menu.classList.toggle('ativo')
})