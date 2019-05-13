const argv = require('./config/yargs').argv;
var colors = require('colors');

const { CrearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        CrearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Tbala de multiplicar del', ` ${argv.base} `.green, ` ${archivo}`.red))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no Reconocido');
}