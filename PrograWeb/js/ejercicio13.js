document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('btnVerificar').addEventListener('click', function() {
        
        let inputEdad = document.getElementById('inputEdad').value.trim();
        let mensajeError = document.getElementById('mensajeError');
        let inputResultado = document.getElementById('inputResultado');

        mensajeError.textContent = "";
        inputResultado.value = "";
        inputResultado.style.color = "#2c3e50"; // Reset color de texto

        if (inputEdad === "") {
            mensajeError.textContent = "El campo no puede estar vacío.";
            return;
        }

        // B) Que sea numérico
        if (isNaN(inputEdad)) {
            mensajeError.textContent = "Ingresa solo valores numéricos.";
            return;
        }
        let edad = parseFloat(inputEdad);
        if (edad < 0) {
            mensajeError.textContent = "La edad no puede ser un número negativo.";
            return;
        }

        if (edad >= 18) {
            inputResultado.value = "Puedes votar";
            inputResultado.style.color = "#27ae60"; 
        } else {
            inputResultado.value = "No puedes votar";
            inputResultado.style.color = "#c0392b"; 
        }
        
    });

});