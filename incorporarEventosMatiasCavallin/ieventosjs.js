let botonAplicar = document.getElementById("botonAplicar");

// A CONTINUACION, EL EVENTO: || EVENTO CLICK//
botonAplicar.addEventListener("click", aplicar);

function aplicar(){
   let valorPrecio = parseInt(document.getElementById("valorPrecio").value);
   let valorIVA = parseInt(valorPrecio * 21 / 100);
   let valorTotal = valorPrecio + valorIVA;

   document.getElementById("ivaNumero").value = valorIVA;
   document.getElementById("totalPIVA").value = valorTotal;
   
   
}