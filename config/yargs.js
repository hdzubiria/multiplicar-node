const parametros = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};


const argv = require('yargs')
    .command('listar', 'Imprime por consola la tabla de multiplicar', parametros)
    .command('crear', 'Crear un archivo con la tabla de multiplicar', parametros)
    .help()
    .argv;


module.exports = {
    argv
}