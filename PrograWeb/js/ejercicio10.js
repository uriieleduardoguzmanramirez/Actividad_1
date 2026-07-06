function convertirTemperatura() {
    let celsius = document.getElementById("celsius").value;
    let fahrenheit = document.getElementById("fahrenheit");
    let mensaje = document.getElementById("mensaje");

    if (celsius === "") {
        mensaje.textContent = "Por favor, ingresa una temperatura en grados Celsius.";
        mensaje.className = "error";
        fahrenheit.value = "";
        return;
    }

    celsius = parseFloat(celsius);

    if (isNaN(celsius)) {
        mensaje.textContent = "El valor ingresado no es válido.";
        mensaje.className = "error";
        fahrenheit.value = "";
        return;
    }

    let resultado = (celsius * 9 / 5) + 32;

    fahrenheit.value = resultado.toFixed(2) + " °F";
    mensaje.textContent = "Conversión realizada correctamente.";
    mensaje.className = "correcto";
}