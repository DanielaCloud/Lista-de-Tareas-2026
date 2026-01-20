/* referencias al documento del DOM */

const tareaEntrada = document.getElementById("tareaEntrada");
const botonAgregar = document.getElementById("botonAgregar");
const contenedorTareas = document.getElementById("contenedorTareas");



/* Función para crear elemento Tarea (Funsión creadora del nodo Tarea) */

function crearElementoTarea(){
  //Crear los elementos html de la tarea
  const tareaContenedor = document.createElement("div");
  const tareaTexto = document.createElement("p");
  const iconosContenedor = document.createElement("div");
  const iconoCompletada = document.createElement("i");
  const iconoEliminar = document.createElement("i");

  // Creamo la estructura de la tarea
  iconosContenedor.append(iconoCompletada, iconoEliminar);
  tareaContenedor.append(tareaTexto, iconosContenedor);

  //agregamos las clases a los elementos de la tarea
  tareaContenedor.classList.add("tarea");
  tareaTexto.classList.add("tarea-texto");
  iconosContenedor.classList.add("tareas-iconos");
  iconoCompletada.classList.add("bis", "bi-check-circle");
  iconoEliminar.classList.add("bi" , "bi-trash2");

  //Agregamos el texto del usuario
  tareaTexto.innerText = tareaEntrada.value;


  //Retornamos la estructura de la tarea 
  return tareaContenedor;

}

/* Escuchador */
botonAgregar.addEventListener("click",agregarTarea);

/* función agregar el elemento tarea */

function agregarTarea() {
  //Traemos elemento retornado por la función crearElementoTarea
  const elementoTarea = crearElementoTarea();
  contenedorTareas.append(elementoTarea);

  //Reiniciar el value del input
  tareaEntrada.value = "";
}
//