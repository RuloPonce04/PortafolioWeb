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
