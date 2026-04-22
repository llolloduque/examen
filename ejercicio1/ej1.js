document.getElementById("imcForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    const imc = peso / (altura * altura);
    let clasificacion = "";
    let claseCSS = "";

    if (imc < 18.5) {
        clasificacion = "Bajo peso";
        claseCSS = "bajo";
    } else if (imc < 25) {
        clasificacion = "Normal";
        claseCSS = "normal";
    } else if (imc < 30) {
        clasificacion = "Sobrepeso";
        claseCSS = "sobrepeso";
    } else {
        clasificacion = "Obesidad";
        claseCSS = "obesidad";
    }

    const resultado = document.getElementById("resultado");
    resultado.className = claseCSS;
    resultado.textContent = `IMC: ${imc.toFixed(2)} - ${clasificacion}`;
});

document.getElementById("edad").onclick = () =>
document.getElementById("btn5").onclick = () =>
  document.getElementById("res5").innerHTML =
    "Hola " + document.getElementById("nombre5").value + " tengo " +document.getElementById("edad").value + " años y mido "