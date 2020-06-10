//Promises 
/*
const esperando = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('Se Ejecuto');
    }, 5000);
});

esperando.then(function(mensaje){
    console.log(mensaje);
})*/

const aplicarDescuento = new Promise(function(resolve, reject){
    const descuento = false;
    if(descuento){
        resolve('Descuento Aplicado');
    }else{
        reject('No Se Puede Aplicar el Descuento');
    }
});

aplicarDescuento.then(function(resultado){
    console.log(resultado);
}).catch(function(error){
    console.log(error);
});