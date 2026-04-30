console.log("-----Bienvenido a la plataforma de tareas-----");

function crearTarea() {
  const tareaNueva = []
  const titulo = prompt("Ingrese el título de la tarea:");
  const descripcion = prompt("Ingrese la descripción de la tarea:");
  let estado = prompt("Ingrese el estado de la tarea:"); 
    
  if (estado == "completada"){
    console.log(`Tarea terminada: ${titulo} - ${descripcion} `);
 }
  else {
    console.log("Tarea en proceso o no existente.");
 }
  tareaNueva.push(crearTarea);
  function filtrarTarea(){
  const filtrar = tareaNueva.filter()
}
  
}


const continuar = prompt("Quieres agregar otra tarea?:");
while (continuar){
  if (continuar == "si"){
    crearTarea();
  }
  else{
    console.log("Saliendo");
    break
  }
}
