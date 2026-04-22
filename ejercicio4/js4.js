let contador = 0
// Esta función Añadir
function agregarTarea(){

  //  primero leemos lo que el usuario nos da 
  //  guardamos ese valor
  //  y en caso de que no escriba nada no guardamos nada
  let entrada = document.getElementById("entradaTarea");
  let texto = entrada.value;
  if(texto === "") return;

  // creamos un nuevo <li> dentro del html con el texto antes guardado
  let elementoLista = document.createElement("li");
  elementoLista.textContent = texto;
  document.getElementById("res3").innerHTML = ++contador

  //  creamos el boton de borrar 
  let botonBorrar = document.createElement("button");
  botonBorrar.textContent = "X";
  botonBorrar.className = "borrar";

  //  la funcion para que al dar al boton de borrar se borre 
  //  y añadimos el boton al <li> que creamos 
  botonBorrar.onclick = function(){
    elementoLista.remove();
      document.getElementById("res3").innerHTML = --contador
  };
  elementoLista.appendChild(botonBorrar);

  // añadimos el <li> que creamos arriba al <ul> que ya tenemos en el html
  document.getElementById("listaTareas").appendChild(elementoLista);

  //  limpiamos el texto que ya nos a dado el usuario 
  entrada.value = "";
}
// no se como hacer para tacharlo :D