// 1. Seleccionamos el botón y el menú nav
const botonMenu = document.querySelector('#boton-menu');
const menuNavegacion = document.querySelector('#navegacion');

// 2. Escuchamos el clic en el botón hamburguesa
botonMenu.addEventListener('click', () => {
    // 3. El toggle quita o pone la clase "menu-oculto" dinámicamente
    menuNavegacion.classList.toggle('menu-oculto');
});

// 1. Seleccionamos el formulario completo
const formulario = document.querySelector('#formulario-contacto');

// 2. Escuchamos cuando el usuario oprima el botón de enviar (submit)
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Evita que la página se recargue locamente
    
    // 3. Capturamos los datos usando .value
    const nombreUsuario = document.querySelector('#campo-nombre').value;
    const mensajeUsuario = document.querySelector('#campo-mensaje').value;
    
    // 4. Mostramos una respuesta inteligente personalizada
    alert(`¡Gracias ${nombreUsuario}! Hemos recibido tu reporte: "${mensajeUsuario}". Procesando solución...`);
    
    // 5. Limpiamos las cajas de texto automáticamente
    formulario.reset();
});
