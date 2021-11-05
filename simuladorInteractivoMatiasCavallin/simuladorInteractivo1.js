
let bienvenida = prompt("Escriba su nombre")

    alert("Bienvenido a nuestra página " + bienvenida)

function calcularCuota(){
let precioT = parseInt(prompt("Escoja su precio:"))
let cuota = parseInt(prompt("Escoja el numero de cuotas:"))
let precioCuota = precioT / cuota

console.log("El total de cada cuota sera de: " + precioCuota)
}
calcularCuota()


