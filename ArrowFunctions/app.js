//Función

let aprendiendo;

aprendiendo = function(){
    console.log('Aprendiendo JavaScript');
}

aprendiendo = () => {
    console.log('Aprendiendo JavaScript');
}

//Una linea no requiere llaves
aprendiendo = () => console.log('Aprendiendo JavaScript');
//Retorna valor
aprendiendo = () => 'Aprendiendo JavaScript';
//Retorna Objeto
aprendiendo = () => ({aprendiendo: 'Aprendiendo JavaScript'});
//Pasar parametros
aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`);
//Pasando 1 parametro
aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);
//Pasando 2 parametros
aprendiendo = (tec1, tec2) => console.log(`Aprendiendo ${tec1} y ${tec2}`);

const productos = ['Disco', 'Camisa', 'Guitarra'];
/*
const letrasProducto = productos.map(function(producto){
    return producto.length;
});

const letrasProducto = productos.map(producto => producto.length);

console.log(letrasProducto);
*/

productos.forEach(producto => console.log(producto));