/*
//Callback en Foreach

const ciudades = ['Londres', 'New York', 'Madrid', 'Barcelona', 'Paris', 'Viena'];

//Inline Callback
ciudades.forEach(function(){
    console.log(ciudad);
})*/


//Listado de paises
const paises =['Francia', 'Argentina', 'Brasil', 'Mexico', 'Alemania', 'Portugal'];

//Se agrega un nuevo pais despues de 2 segundos
function nuevoPais(pais, callback){
    setTimeout(function(){
        paises.push(pais);
        callback();
    }, 2000);
}

//Los paises se muestran despues de un segundo
function mostrarPaises(){
    setTimeout(function(){
        let html ='';
        paises.forEach(function(pais){
            html += `<li>${pais}</li>`;
        });
        document.getElementById('app').innerHTML = html;
    }, 1000);
}

//Agregar Nuevo Pais
nuevoPais('Croacia', mostrarPaises);

//Mostrar los paises
mostrarPaises();