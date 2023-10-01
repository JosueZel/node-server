
const readline = require ("readline-sync");
let tareas = [];

function mostrartareas() {
 console.log("Lista de tareas ");
tareas.forEach((tarea, index) => {
    const estado = tarea.completada ? "[Completada]":"[Pendiente]";
    console.log(`${index+1}. ${estado} ${tarea.descripcion}`)
 });
}

function agregartarea(descripcion){
    tareas.push({descripcion,completada: false});
    console.log("Tarea Agregada correctamente ");
}

function eliminartarea(index){
    if(index >= 0 && index < tareas.length){
        tareas.splice(index, 1);
        console.log('Tarea eliminada correctamente.\n');
    }else{
        console.log('indice de la tarea no valido\n');
    }
}

function marcartareacompletada(index){
    if(index >= 0 && index < tareas.length){
        tareas[index].completada = true;
        console.log('Tarea marcada como Completada.\n');
    }else{
        console.log('indice de la tarea no valido\n');
    }
}

while (true) {
    mostrartareas();
const opciones = [
    'Agregar tarea',
    'Eliminar tarea',
    'Marcar tarea como completada',
    'Salir',
  ];

  const index = readline.keyInSelect(opciones, "que deseas hacer?");

  if (index === 0) {
    const descripcion = readline.question("Descripcion de la tarea:");
    agregartarea(descripcion);
  } else if (index === 1) {
    const indexaremover = readline.questionInt("Indice de la tarea a eliminar: ") - 1;
    eliminartarea(indexaremover);
  } else if (index === 2) {
    const indexacompletar = readline.questionInt("Indice de la tarea a marcar como completada:" ) - 1;
    marcartareacompletada(indexacompletar);
  } else if (index === 3) {
    break;
  }
}