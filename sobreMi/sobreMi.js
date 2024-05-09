document.getElementById("btnHome").addEventListener("click", function() {
    window.location.href=("../index.html");
});

document.getElementById("btnPersonal").addEventListener("click", function() {
    document.getElementById("backgroundInformationPersonal").classList.add(
        "resaltar");
    
    // Opcionalmente, puedes quitar la clase después de un tiempo para permitir que la animación se repita
    setTimeout(function() {
        document.getElementById("backgroundInformationPersonal").classList.remove(
            "resaltar");
    }, 500); // La duración de la animación en milisegundos
});

// Obtener todos los botones de constancia
const constancyButtons = document.querySelectorAll('.btnShowConstancy');

// Agregar evento clic a cada botón
constancyButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Obtener la superposición más cercana al botón clickeado
        const overlay = this.parentElement.nextElementSibling;
        overlay.style.display = 'flex';
    });
});

// Agregar evento clic para cerrar la superposición
document.querySelectorAll('.close').forEach(closeButton => {
    closeButton.addEventListener('click', function() {
        const overlay = this.parentElement.parentElement;
        overlay.style.display = 'none';
    });
});

// Agregar evento clic para cerrar la superposición haciendo clic fuera de ella
document.querySelectorAll('.overlay').forEach(overlay => {
    overlay.addEventListener('click', function(event) {
        if (event.target === this) {
            this.style.display = 'none';
        }
    });
});
