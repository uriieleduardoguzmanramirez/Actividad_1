document.getElementById('btnConvertir').addEventListener('click', function() {
            
    let inputKm = document.getElementById('inputKm').value.trim();
    let mensajeError = document.getElementById('mensajeError');
    let inputMillas = document.getElementById('inputMillas');

    mensajeError.textContent = "";
    inputMillas.value = "";

    if (inputKm === "") {
        mensajeError.textContent = "El campo no puede estar vacío.";
        return;
    }

    if (isNaN(inputKm)) {
        mensajeError.textContent = "Ingresa solo valores numéricos.";
        return;
    }

    let K = parseFloat(inputKm);
    let M = K * 0.621371;

    inputMillas.value = M; 
});