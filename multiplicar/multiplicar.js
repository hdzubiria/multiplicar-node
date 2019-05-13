// Rquireds
const { writeFile } = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    console.log('============================'.green);
    console.log(`Tabla de Multiplicar del ${ base }`.green);
    console.log('============================'.green);

    for (let indice = 1; indice <= limite; indice++) {
        console.log(` ${base} * ${indice} = ${base*indice}`);;
    }

}

let CrearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('La base no es un número');
            return;
        }

        let data = '';

        for (let indice = 1; indice <= limite; indice++) {
            data += ` ${base} * ${indice} = ${base*indice}\n`;
        }

        writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)
        });
    });
}

module.exports = {
    listarTabla,
    CrearArchivo
}