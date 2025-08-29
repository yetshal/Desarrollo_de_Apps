const tareaInput = document.getElementById("inputComida");
const agregarBtn = document.getElementById("botonAgregar");
const listaTareas = document.getElementById("Lista");

agregarBtn.addEventListener("click", function () {
  const nuevaTareaTexto = tareaInput.value;
  if (nuevaTareaTexto === "") return;

  const nuevaTareaLi = document.createElement("li");
  nuevaTareaLi.textContent = nuevaTareaTexto;

  //Creamos el boton de eliminar
  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.style.marginLeft = "30px";

  //Evento para el boton de borrar el elemento hijo
  botonEliminar.addEventListener("click", function () {
    listaTareas.removeChild(nuevaTareaLi);
  });

  // Agregar el botón al li
  nuevaTareaLi.appendChild(botonEliminar);
  listaTareas.appendChild(nuevaTareaLi);

  tareaInput.value = "";
});
