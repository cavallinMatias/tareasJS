let personas = ["Matias", "Pepe", "Fulano", "Fulana", "Coco", "Pedro", "Ana"];

let listaPersonas = document.getElementById("listaPersonas1");


for (let persona of personas){
    /*console.log(persona)*/
    listaPersonas.innerHTML += `<li>${persona}<li>`;

}
