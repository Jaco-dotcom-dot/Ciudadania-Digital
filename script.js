let indiceImagen = 0;

function moverCarrusel(direccion) {
    let imagenes = document.querySelectorAll('.carrusel-img');
    
    if (imagenes.length === 0) return;

    // Quitar la clase active de la imagen actual
    imagenes[indiceImagen].classList.remove('active');

    // Cambiar el índice
    indiceImagen += direccion;

    // Controlar los límites
    if (indiceImagen >= imagenes.length) {
        indiceImagen = 0;
    } else if (indiceImagen < 0) {
        indiceImagen = imagenes.length - 1;
    }

    // Agregar la clase active a la nueva imagen
    imagenes[indiceImagen].classList.add('active');
}