let precioT = 0

function precioCosto(){
precioT = parseInt(prompt("Ingrese el precio del producto/servicio: "))

alert("El precio ingresado es de " + precioT)
}


function sumarIva(){
let iva = precioT * 21 / 100

alert("El IVA sera de: " + iva)

}


function muestraPrecio(){
let precioTotal = precioT * 1.21

alert("El precio total con IVA sera de: " + precioTotal)
}


precioCosto()
sumarIva()
muestraPrecio()
