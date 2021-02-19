const argv = require('yargs')
    .command('listar', 'Imprime en pantalla la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            demand: false,
            alias: 'l',
            default: 10

        }
    })
    .command('crear', 'Crea un archivo con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            demand: false,
            alias: 'l',
            default: 10

        }
    })
    .help()
    .argv;
const multiplicar = require('./multiplicacion/multiplicacion');

let comando = argv._[0];

let base = argv.base;
let limite = argv.limite;


switch (comando) {
    case 'listar':

        multiplicar
            .listarTabla(base, limite)
            .then()
            .catch(error => console.log(`Ocurrio un error ${error}`));
        break;
    case 'crear':


        multiplicar
            .crearArchivo(base, limite)
            .then(archivo => console.log(`El archivo ${archivo} ha sido generado con exito`))
            .catch(error => console.log(`Ocurrio un error ${error}`));
        break;
    default:
        console.log('Comando no reconocido');
}