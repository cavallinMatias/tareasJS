
let personas = [{
    nombre: "Matias",
    edad: 25,

},
{
    nombre: "Eduardo",
    edad: 22,
},
{
    nombre: "German",
    edad: 44,

},
{
    nombre: "Mike",

    edad: 56,
}];

personas.sort((a, b) => {
    return a.edad - b.edad;
});
console.log(personas.sort())



