"use strict";

// Funciones flecha para las operaciones básicas
const sumar = (a, b) => a + b;

const restar = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

const dividir = (a, b) => b !== 0 ? a / b : "Error: División por cero";

// Función flecha para mostrar alertas con SweetAlert2
const mostrarError = mensaje => {
    Swal.fire({
        title: "Error",
        text: mensaje,
        icon: "error",
        confirmButtonText: "Entendido"
    });
};

// Función principal
const calcularOperacion = operacion => {
    const valor1 = document.getElementById("numero1").value.trim();
    const valor2 = document.getElementById("numero2").value.trim();
    const resultado = document.getElementById("resultado");

    if (valor1 === "" || valor2 === "") {
        mostrarError("Debes ingresar los dos números.");
        resultado.value = "";
        return;
    }

    const numero1 = Number(valor1);
    const numero2 = Number(valor2);

    if (isNaN(numero1) || isNaN(numero2)) {
        mostrarError("Solo se permiten valores numéricos.");
        resultado.value = "";
        return;
    }

    let operacionTexto = "";
    let resultadoOperacion;

    switch (operacion) {
        case "suma":
            resultadoOperacion = sumar(numero1, numero2);
            operacionTexto = "Suma";
            break;

        case "resta":
            resultadoOperacion = restar(numero1, numero2);
            operacionTexto = "Resta";
            break;

        case "multiplicacion":
            resultadoOperacion = multiplicar(numero1, numero2);
            operacionTexto = "Multiplicación";
            break;

        case "division":
            if (numero2 === 0) {
                mostrarError("No se puede dividir entre cero.");
                resultado.value = "";
                return;
            }

            resultadoOperacion = dividir(numero1, numero2);
            operacionTexto = "División";
            break;

        default:
            mostrarError("Operación no válida.");
            resultado.value = "";
            return;
    }

    resultado.value = `${operacionTexto}: ${resultadoOperacion}`;

    Swal.fire({
        title: "Operación realizada",
        text: `El resultado de la ${operacionTexto.toLowerCase()} es: ${resultadoOperacion}`,
        icon: "success",
        confirmButtonText: "Aceptar"
    });
};

// Función para limpiar los campos
const limpiarCalculadora = () => {
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("numero1").focus();
};