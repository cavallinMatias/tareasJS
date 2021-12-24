/*
let url= "https://jsonplaceholder.typicode.com/posts"

$("#botonGet").click(function(){
    $.get(url, function(datos){
        console.log(datos)
    })
})

*/

let clima = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=5502938f84635feb44be55160d2a824c"

$("#botonClima").click(function(){
    $.get(clima, function(respuesta){
        console.log(respuesta)
    })
})