
// UTILIZANDO DOM: SE ESCRIBE NOMBRE -> SE TOCA EL BOTON -> POR MEDIO DE LA FUNCION, LA VARIABLE TOMA EL VALOR -> LO MUESTRA POR ALERT (EL VALUE)//
function agregar(){
    let nombre = document.getElementById("user");

    alert("Bienvenido/a a SUPERIVA, " + nombre.value)
}

let precio2 = 0

class superIVA{
    constructor(precio){
    this.precio = precio;
}

calcularIVA(){
    precio2 = this.precio * 21 / 100
    console.log("Considerando un IVA de " + precio2)
}
totalIVA(){
    this.precio = precio2 + this.precio
    console.log("Usted pagara un total de " + this.precio)
}

}

