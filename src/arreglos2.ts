export const listarArray = () => {
    let arreglo = [10, 20, 30, 40];
    for(let numero of arreglo){
console.log(numero);
    }
}
export const listarString = () => {
    let saludo = 'buenas noches';
    for(let caracter of saludo){
        console.log(caracter);
    }
}

export const listarLoop = () => {
    let arreglo = [10,20,30,40];
    for (const key in arreglo) {
        console.log(key);
    }
}