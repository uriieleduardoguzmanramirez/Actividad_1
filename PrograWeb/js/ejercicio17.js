"use strict";

/*
    Ejercicio 17
    Gestión de tareas usando JSON, Local Storage, funciones, closures y scope.
*/

// Closure principal para manejar las tareas
const gestorTareas = (() => {

    // Esta variable tiene scope local dentro del closure
    const claveStorage = "tareasEjercicio17";

    const obtenerTareas = () => {
        const tareasGuardadas = localStorage.getItem(claveStorage);

        if (tareasGuardadas === null) {
            return [];
        }

        return JSON.parse(tareasGuardadas);
    };

    const guardarTareas = tareas => {
        localStorage.setItem(claveStorage, JSON.stringify(tareas));
    };

    const agregarTarea = textoTarea => {
        const tareas = obtenerTareas();

        const nuevaTarea = {
            id: Date.now(),
            texto: textoTarea,
            fecha: new Date().toLocaleString()
        };

        tareas.push(nuevaTarea);
        guardarTareas(tareas);
    };

    const eliminarTarea = idTarea => {
        const tareas = obtenerTareas();

        const tareasActualizadas = tareas.filter(tarea => tarea.id !== idTarea);

        guardarTareas(tareasActualizadas);
    };

    // Solo se exponen las funciones necesarias
    return {
        obtenerTareas,
        agregarTarea,
        eliminarTarea
    };

})();

const tareaInput = document.getElementById("tareaInput");
const btnAgregar = document.getElementById("btnAgregar");
const listaTareas = document.getElementById("listaTareas");
const mensajeVacio = document.getElementById("mensajeVacio");
const contadorTareas = document.getElementById("contadorTareas");

const mostrarAlerta = (titulo, mensaje, icono) => {
    Swal.fire({
        title: titulo,
        text: mensaje,
        icon: icono,
        confirmButtonText: "Aceptar"
    });
};

const renderizarTareas = () => {
    const tareas = gestorTareas.obtenerTareas();

    listaTareas.innerHTML = "";
    contadorTareas.textContent = `Tareas registradas: ${tareas.length}`;

    if (tareas.length === 0) {
        mensajeVacio.style.display = "block";
        return;
    }

    mensajeVacio.style.display = "none";

    tareas.forEach(tarea => {
        const li = document.createElement("li");
        li.className = "tarea-item";

        const divInfo = document.createElement("div");
        divInfo.className = "tarea-info";

        const texto = document.createElement("strong");
        texto.textContent = tarea.texto;

        const fecha = document.createElement("small");
        fecha.textContent = `Agregada: ${tarea.fecha}`;

        const botonEliminar = document.createElement("button");
        botonEliminar.className = "btn-eliminar";
        botonEliminar.textContent = "Eliminar";

        botonEliminar.addEventListener("click", () => {
            confirmarEliminacion(tarea.id);
        });

        divInfo.appendChild(texto);
        divInfo.appendChild(fecha);

        li.appendChild(divInfo);
        li.appendChild(botonEliminar);

        listaTareas.appendChild(li);
    });
};

const agregarTarea = () => {
    const textoTarea = tareaInput.value.trim();

    if (textoTarea === "") {
        mostrarAlerta("Campo vacío", "Debes escribir una tarea antes de agregarla.", "warning");
        return;
    }

    gestorTareas.agregarTarea(textoTarea);

    tareaInput.value = "";
    tareaInput.focus();

    renderizarTareas();

    mostrarAlerta("Tarea agregada", "La tarea se guardó correctamente en Local Storage.", "success");
};

const confirmarEliminacion = idTarea => {
    Swal.fire({
        title: "¿Eliminar tarea?",
        text: "Esta acción eliminará la tarea del Local Storage.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar"
    }).then(resultado => {
        if (resultado.isConfirmed) {
            gestorTareas.eliminarTarea(idTarea);
            renderizarTareas();

            Swal.fire({
                title: "Eliminada",
                text: "La tarea fue eliminada correctamente.",
                icon: "success",
                confirmButtonText: "Aceptar"
            });
        }
    });
};

btnAgregar.addEventListener("click", agregarTarea);

tareaInput.addEventListener("keydown", evento => {
    if (evento.key === "Enter") {
        agregarTarea();
    }
});

document.addEventListener("DOMContentLoaded", renderizarTareas);