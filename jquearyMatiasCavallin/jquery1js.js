let botonSaludo = document.getElementById("botonSaluda");
botonSaludo.addEventListener("click", saludo);

let botonEdad = document.getElementById("botonEdad");
botonEdad.addEventListener("click", edad);


function saludo(){
    let nombre1 = document.getElementById("user").value;

    let divSaludo = document.getElementById("espacioSaludo");
    divSaludo.innerHTML = `<p> Bienvenido a SUPERIVA, ${nombre1}. A continuacion, te pedimos que rellenes los campos a tu gusto. </p>`;
    
}

function edad(){
    let edad1 = document.getElementById("edadUser").value;
    let divEdad = document.getElementById("espacioEdad");

    if (edad1 >= 18){
        divEdad.innerHTML = `<p>Usted tiene ${edad1}. Puede proceder sin permiso de sus padres. </p>`
    }
    else{
        divEdad.innerHTML = `<p>Usted tiene ${edad1}. Por tanto, le recomendamos supervision de sus padres. </p>`
    }
    

}

let botonGuardar = document.getElementById("saveData");
botonGuardar.addEventListener("click", guardarArchivos);

function guardarArchivos(){
    let archivo1 = document.getElementById("user").value;
    let archivo2 = document.getElementById("edadUser").value;
    let avisoGuardado = document.getElementById("botonGuardadoEspacio");

if (archivo1 && archivo2){
    localStorage.setItem("Nombre Registrado", JSON.stringify(archivo1))
    localStorage.setItem("Edad Registrada", JSON.stringify(archivo2))
}

avisoGuardado.innerHTML = `<p>Se han guardado correctamente en el LocalStorage. </p>`

}
let botonAplicar = document.getElementById("botonAplicar");

botonAplicar.addEventListener("click", aplicar);

function aplicar(){
   let valorPrecio = parseInt(document.getElementById("valorPrecio").value);
   let valorIVA = parseInt(valorPrecio * 21 / 100);
   let valorTotal = valorPrecio + valorIVA;

   document.getElementById("ivaNumero").value = valorIVA;
   document.getElementById("totalPIVA").value = valorTotal;
   
}

/* JQUERY */

$(document).ready(function(){

    alert("Listo para saludar")

})
$(".cuadro0").mouseover(function(){
    $(".cuadro0").css("color", "green");
})
$(".cuadro0").mouseout(function(){
    $(".cuadro0").css("color", "black");
})

    