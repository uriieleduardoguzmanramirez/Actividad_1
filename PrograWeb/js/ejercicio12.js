document.getElementById('btnConvertir').addEventListener('click', function() {
            
    let inputMXN = document.getElementById('inputMXN').value.trim();
    let mensajeError = document.getElementById('mensajeError');
    let inputUSD = document.getElementById('inputUSD');

    mensajeError.textContent = "";
    inputUSD.value = "";

    if (inputMXN === "") {
        mensajeError.textContent = "El campo no puede estar vacío.";
        return;
    }

    if (isNaN(inputMXN)) {
        mensajeError.textContent = "Ingresa solo valores numéricos.";
        return;
    }

    let MXN = parseFloat(inputMXN);

    if (MXN <= 0) {
        mensajeError.textContent = "El valor debe ser positivo mayor a 0.";
        return;
    }

    let tasa_de_cambio = 0.055;
    let USD = MXN * tasa_de_cambio;

    inputUSD.value = USD.toFixed(2); 
});