// 1. Seleccionamos el botón y el menú nav
const botonMenu = document.querySelector('#boton-menu');
const menuNavegacion = document.querySelector('#navegacion');

// 2. Escuchamos el clic en el botón hamburguesa
botonMenu.addEventListener('click', () => {
    // 3. El toggle quita o pone la clase "menu-oculto" dinámicamente
    menuNavegacion.classList.toggle('menu-oculto');
});
