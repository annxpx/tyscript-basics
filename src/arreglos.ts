const nombres : string[]= [];


 const imprimirNombres = () => {
    nombres.push('Juan Perez');
    nombres.push('Maria Perez');
    for(let index = 0; index <nombres.length; index++){
        console.log('Nombre: '+ nombres[index]);
    }
}

 const contarPosiciones = () => {
    console.log('la cantidad de nombres es: ' + nombres.length);
} 
export{contarPosiciones, imprimirNombres};