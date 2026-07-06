let estudiantes = [];

document.getElementById('btnAgregar').addEventListener('click', function() {
    let inputNombre = document.getElementById('inputNombre').value.trim();
    let inputCalificacion = document.getElementById('inputCalificacion').value.trim();
    let mensajeError = document.getElementById('mensajeError');
    let contadorEstudiantes = document.getElementById('contadorEstudiantes');

    mensajeError.textContent = "";

    if (inputNombre === "" || inputCalificacion === "") {
        mensajeError.textContent = "Ambos campos son obligatorios.";
        return;
    }

    if (isNaN(inputCalificacion) || inputCalificacion === "") {
        mensajeError.textContent = "La calificación debe ser un número válido.";
        return;
    }

    let calificacion = parseFloat(inputCalificacion);

    estudiantes.push({
        nombre: inputNombre,
        calificacion: calificacion
    });

    document.getElementById('inputNombre').value = "";
    document.getElementById('inputCalificacion').value = "";
    
    contadorEstudiantes.textContent = "Total agregados: " + estudiantes.length;
});

document.getElementById('btnCalcular').addEventListener('click', function() {
    let mensajeError = document.getElementById('mensajeError');
    let outPromedio = document.getElementById('outPromedio');
    let outMejor = document.getElementById('outMejor');
    let outPeor = document.getElementById('outPeor');

    mensajeError.textContent = "";

    if (estudiantes.length === 0) {
        mensajeError.textContent = "Agrega al menos un estudiante antes de calcular.";
        return;
    }

    let sumaTotal = estudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0);
    let promedio = sumaTotal / estudiantes.length;

    let calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
    let calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));

    let mejorEstudiante = estudiantes.find(e => e.calificacion === calificacionMaxima).nombre;
    let peorEstudiante = estudiantes.find(e => e.calificacion === calificacionMinima).nombre;

    outPromedio.value = promedio.toFixed(2);
    outMejor.value = mejorEstudiante;
    outPeor.value = peorEstudiante;
});