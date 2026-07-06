document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('btnCalcular').addEventListener('click', function() {
        let inputNumeros = document.getElementById('inputNumeros').value.trim();
        let mensajeError = document.getElementById('mensajeError');
        
        let inputMayor = document.getElementById('inputMayor');
        let inputMenor = document.getElementById('inputMenor');
        let inputPromedio = document.getElementById('inputPromedio');

        mensajeError.textContent = "";
        inputMayor.value = "";
        inputMenor.value = "";
        inputPromedio.value = "";

        if (inputNumeros === "") {
            mensajeError.textContent = "El campo no puede estar vacío.";
            return;
        }

        let arreglo = inputNumeros.split(",");

        let numeros = arreglo.map(Number);

        let contieneErrores = numeros.some(isNaN);
        if (contieneErrores) {
            mensajeError.textContent = "Por favor, ingresa solo números válidos separados por comas.";
            return;
        }

        let maximo = Math.max(...numeros);

        let minimo = Math.min(...numeros);

        let suma = numeros.reduce((acc, valor) => acc + valor, 0);
        let promedio = suma / numeros.length;

        inputMayor.value = maximo;
        inputMenor.value = minimo;
        inputPromedio.value = promedio;
        
    });

});