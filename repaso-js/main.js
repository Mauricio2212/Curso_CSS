//Declaracion de variables
var nombre = "Mauricio";
var altura = 160;
var concatenacion = nombre + " " + altura;

var datos = document.getElementById("datos");
//template string
datos.innerHTML = `
<h1>Soy una caja de datos</h1>
<h2>Mi nombre es: ${nombre} </h2>
<h3>Y mido: ${altura}</h3>
`;

if (altura <= 160) {
    datos.innerHTML += '<h1>Tas todo Chaparro</h1>'
} else {
    datos.innerHTML += '<H1>Tas Alto</h1>'
}


// Ciclos
// Ciclo FOR
for (var i = 2000; i <= 2020; i++) {
    datos.innerHTML += "<h2>Estamos en el año:" + i;
}

//Funciones
function muestraMiNombre(nombre, altura) {
    var misDatos = `
    <h1>Soy una caja de datos</h1>
    <h2>Mi nombre es: ${nombre} </h2>
    <h3>Y mido: ${altura}</h3>
    `;

    return misDatos;
}


function imprimir(){
    var datos = document.getElementById("datos"); 
    datos.innerHTML += muestraMiNombre("Mauricio del Valle", 163);
}

imprimir();

muestraMiNombre("Mauricio del Valle", 162);

//Arrays
var nombres = ['nombre1', 'nombre2', 'nombre3'];
alert(nombres[1]);

/*
document.write('<h1>Listado de Nombre</h1>');
for(i = 0; i < nombres.length; i++){
    document.write(nombres[i] + '<br>');
}
*/

nombres.forEach((nombre) => {
    document.write(nombre + '<br>');
});