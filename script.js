// --- FUNCIONALIDAD DEL BUSCADOR EN TIEMPO REAL ---
document.getElementById('inputBuscador').addEventListener('keyup', function() {
    let filtro = this.value.toLowerCase();
    let tarjetas = document.querySelectorAll('.card');

    tarjetas.forEach(function(tarjeta) {
        let texto = tarjeta.innerText.toLowerCase();
        if (texto.includes(filtro)) {
            tarjeta.style.display = "block";
        } else {
            tarjeta.style.display = "none";
        }
    });
});

// --- FUNCIONALIDAD DEL QUIZ ---
function verificarRespuesta(esCorrecta) {
    let resultado = document.getElementById('resultado-quiz');
    if (esCorrecta) {
        resultado.textContent = "¡Correcto! 🎉 La Netiqueta define las reglas de educación en el entorno digital.";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "Respuesta incorrecta ❌. Inténtalo de nuevo.";
        resultado.style.color = "red";
    }
}