/* He creado utlizando clases, objetos y metodos un mecanismo que detecta los productos que ofrezco, con su nombre y precio, 
y la recomendacion de poder sacarlo en 12 cuotas sin interes aplicando la formula directamente */


class productos{
    constructor(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

cuotasSinInteres(){
    this.precio = this.precio / 12
    console.log("Lo podra sacar en 12 cuotas sin interes, pagando por c/u " + this.precio)
}


}
let computadora = new productos("PC", 100000);
let celular = new productos("Samsung A02", 20000);
let reparacionPC = new productos("Reparacion de Computadora", 2500)


console.log(computadora)
computadora.cuotasSinInteres()
console.log(celular)
celular.cuotasSinInteres()
console.log(reparacionPC)
reparacionPC.cuotasSinInteres()