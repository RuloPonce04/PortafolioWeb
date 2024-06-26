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

document.getElementById("btnSkills").addEventListener("click", function() {
    // Calcula la posición del elemento al que quieres desplazarte
    var sectionSkills = document.getElementById("backgroundCoreSkills");
    var sectionSkillsPosition = sectionSkills.offsetTop;

    // Desplaza la ventana hacia la posición de la sección de habilidades de forma suave
    sectionSkills.scrollIntoView({ behavior: 'smooth' });

    // Agrega la clase de resaltar a la sección de habilidades al hacer clic en el botón Skills
    sectionSkills.classList.add("resaltar");


});

document.getElementById("btnKnowledge").addEventListener("click", function() {
    // Calcula la posición del elemento al que quieres desplazarte
    var sectionSkills = document.getElementById("backgroundCoreFormation");
    var sectionSkillsPosition = sectionSkills.offsetTop;

    // Desplaza la ventana hacia la posición de la sección de habilidades de forma suave
    sectionSkills.scrollIntoView({ behavior: 'smooth' });

    // Agrega la clase de resaltar a la sección de habilidades al hacer clic en el botón Skills
    sectionSkills.classList.add("resaltar");
});

// Obtener todos los botones de constancia
const constancyButtons = document.querySelectorAll('.btnShowConstancy');

// Agregar evento clic a cada botón
constancyButtons.forEach(button => {
    button.addEventListener('click', function() {
        const constancyOverlay = this.parentElement.querySelector('.constancyOverlay');
        constancyOverlay.style.display = 'flex';
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
