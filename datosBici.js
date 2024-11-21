const fs = require('fs');

function leerBicicletas() {
    const bicicletas = JSON.parse(fs.readFileSync('./bicicletas.json', 'utf-8'));
    return bicicletas;
}

const bicicletas = leerBicicletas();

console.log('Contenido del archivo bicicletas.json:');
console.log(bicicletas);

module.exports = leerBicicletas;