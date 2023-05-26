function resumen(){
var categoria = document.getElementById("categoria").value;
var valor = 200;
var descuento = 0;
var valorConDescuento= 0;

switch (categoria){
    case "estudiante":
        descuento = valor * 0.80;
        valorConDescuento = (valor - descuento) * document.getElementById("cantidad").value;
        break;
    case "trainee":
        descuento = valor * 0.50;
        valorConDescuento = (valor - descuento) * document.getElementById("cantidad").value;
         break;
    case "junior":
        descuento = valor * 0.15;
        valorConDescuento = (valor - descuento) * document.getElementById("cantidad").value;
         break;
}
document.getElementById("total").innerHTML = valorConDescuento
}