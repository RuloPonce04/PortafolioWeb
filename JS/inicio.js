// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function() {
    // Busca el elemento del botón de descarga por su ID
    var downloadButton = document.getElementById("btnDowlandCV");

    // Añade un evento de clic al botón de descarga
    downloadButton.addEventListener("click", function() {
        // URL del archivo PDF que deseas descargar (reemplaza esto con tu propia URL)
        var pdfUrl = "CV/RAUL_PONCELOPEZ_CV_3.pdf"; // Debes proporcionar la URL accesible en línea de tu archivo PDF

        // Crea un elemento <a> en la memoria del navegador
        var link = document.createElement('a');
        // Asigna la URL del archivo PDF al atributo href del enlace
        link.href = pdfUrl;

        // Asigna un nombre al archivo que se descargará (puedes cambiarlo según necesites)
        link.download = 'RAUL_PONCELOPEZ_CV_3.pdf';

        // Simula un clic en el enlace para iniciar la descarga
        document.body.appendChild(link);
        link.click();

        // Elimina el elemento <a> creado de la memoria del navegador
        document.body.removeChild(link);
    });
});

// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function() {
    // Obtenemos el botón de contacto por su ID
    var scrollButton = document.getElementById("btnContact");

    // Añadimos un evento de click al botón
    scrollButton.addEventListener("click", function() {
        // Obtenemos la altura de la ventana del navegador
        var windowHeight = window.innerHeight;
        // Obtenemos la altura total de la página (incluyendo el contenido que no está visible)
        var fullHeight = document.body.scrollHeight;

        // Realizamos el desplazamiento hacia abajo de la página
        window.scrollTo({
            // La posición a la que queremos desplazarnos es la altura total de la página menos la altura de la ventana
            top: fullHeight - windowHeight,
            // Hacemos que el desplazamiento sea suave en lugar de instantáneo
            behavior: 'smooth'
        });
    });
});


// Agrega un evento de clic al botón de copiar número de WhatsApp
document.getElementById("btnCopyWhatsApp").addEventListener("click", function() {
    // Obtiene el número de teléfono de WhatsApp del elemento de párrafo correspondiente
    var telefono = document.getElementById("WhatsAppCopy").innerText;
    // Llama a la función copyToClipboard con el número de teléfono como argumento
    copyToClipboard(telefono);
    // Muestra un mensaje temporal indicando que el número se copió
    if (telefono != "+52 477 675 6814"){
        showMessage("Error al copiar el numero");
        console.log("Copy number ERROR")
    }else{
        showMessage("Número copiado");
    }
    
});

// Agrega un evento de clic al botón de copiar correo electrónico de Gmail
document.getElementById("btnCopyGmail").addEventListener("click", function() {
    // Obtiene el correo electrónico de Gmail del elemento de párrafo correspondiente
    var correo = document.getElementById("gmailCopy").innerText;
    // Llama a la función copyToClipboard con el correo electrónico como argumento
    copyToClipboard(correo);
    // Muestra un mensaje temporal indicando que el correo se copió
    if (correo != "raulponcelopez2002@gmail.com"){
        showMessage("Error al copiar el numero");
        console.log("Copy Email ERROR")
    }else{
        showMessage("Correo electrónico copiado");
    }
    
});

// Agrega un evento de clic al botón de perfil de LinkedIn
document.getElementById("btnLinkedin").addEventListener("click", function() {
    // Abre el perfil de LinkedIn en una nueva pestaña del navegador
    window.open("https://www.linkedin.com/in/des-raul-ponce-lopez/", "_blank");
});

// Función para mostrar un mensaje temporal
function showMessage(message) {
    // Crea un elemento div para el mensaje
    var mensajeDiv = document.createElement("div");
    mensajeDiv.textContent = message;
    mensajeDiv.classList.add("mensaje");
    // Agrega el mensaje al cuerpo del documento
    document.body.appendChild(mensajeDiv);
    // Después de 4 segundos, elimina el mensaje
    setTimeout(function() {
        mensajeDiv.remove();
    }, 3000);
}

// Función para copiar texto al portapapeles
function copyToClipboard(texto) {
    // Crea un elemento input temporal
    var inputTemp = document.createElement("input");
    // Establece el valor del input como el texto a copiar
    inputTemp.setAttribute("value", texto);
    // Agrega el input temporal al DOM
    document.body.appendChild(inputTemp);
    // Selecciona el contenido del input
    inputTemp.select();
    // Ejecuta el comando de copiar
    document.execCommand("copy");
    // Elimina el input temporal del DOM
    document.body.removeChild(inputTemp);
}
