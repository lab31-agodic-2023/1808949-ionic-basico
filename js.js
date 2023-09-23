
document.addEventListener("DOMContentLoaded", function() {
var gastos = [];
var gasto = document.getElementById("gasto");
var monto = document.getElementById("monto");
var boton = document.getElementById("boton");

boton.addEventListener("click",guardartxt);

function guardartxt()
{
    var txt = gasto.value + ":" + monto.value;
    gastos.push(txt);

    console.log(gastos);

    
}
});






