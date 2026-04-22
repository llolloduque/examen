  let cuenta = 10
     let intervalo = null
    const resultado = document.getElementById("resultado")
    const buttoniniciar = document.getElementById("iniciar")
    const buttonparar =document.getElementById("Parar")


   
buttoniniciar.addEventListener("click", function(){
    cuenta = 0;
resultado.innerHTML = cuenta;
  intervalo = setInterval(function() {
    cuenta++;
    resultado.innerHTML = cuenta

    if (cuenta === 0) {
      clearInterval(intervalo)
      resultado.innerHTML = "¡Tiempo!"
    }
  }, 1000)
})

buttonparar.addEventListener("click", function() {
  clearInterval(intervalo);
  intervalo = null;
})