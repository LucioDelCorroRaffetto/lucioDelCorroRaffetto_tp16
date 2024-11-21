const leerBicicletas = require('./datosBici');

const dhBici = {
    bicicletas: leerBicicletas(),
    buscarBici: function(id) {
        const bicicletas_filtradas = this.bicicletas.filter(bici => bici.id === id);
        if (bicicletas_filtradas.length > 0) {
            return bicicletas_filtradas[0];
        } else {
            return null;
        }
    },
    venderBici: function(id) {
        const bici = this.buscarBici(id);
        if (bici) {
            bici.vendida = "si";
            return bici;
        } else {
            return "Bicicleta no encontrada";
        }
    },
    biciParaLaVenta: function() {
        const bicisVendidas = this.bicicletas.filter(bici => bici.vendida === "si");
        return bicisVendidas;
    },
    totalDeVentas: function() {
        const total = this.bicicletas.reduce((acumulador, bici) => acumulador + bici.precio, 0);
        return total;
    },
    aumentoBici: function(porcentaje) {
        return this.bicicletas.map(bici => {
            bici.precio = bici.precio + (bici.precio * porcentaje / 100);
            return bici;
        });
    },
    biciPorRodado: function(rodado) {
        return this.bicicletas.filter(bici => bici.rodado === rodado);
    },
    listarTodasLasBici: function() {
        console.log('Listado de todas las bicicletas:');
        console.log('--------------------------------');
        for (const bici of this.bicicletas) {
            console.log(`ID: ${bici.id}`);
            console.log(`Marca: ${bici.marca}`);
            console.log(`Modelo: ${bici.modelo}`);
            console.log(`Rodado: ${bici.rodado}`);
            console.log(`Año: ${bici.anio}`);
            console.log(`Color: ${bici.color}`);
            console.log(`Peso: ${bici.peso} kg`);
            console.log(`Tipo: ${bici.tipo}`);
            console.log(`Precio: $${bici.precio}`);
            console.log(`Vendida: ${bici.vendida}`);
            console.log('--------------------------------');
        }
    }
};

console.log(dhBici.bicicletas);
console.log("--------------------------------");
console.log(dhBici.buscarBici(3));
console.log("--------------------------------");
console.log(dhBici.venderBici(1));
console.log("--------------------------------");
console.log(dhBici.biciParaLaVenta());
console.log("--------------------------------");
console.log(dhBici.totalDeVentas());
console.log("--------------------------------");
console.log(dhBici.aumentoBici(10));
console.log("--------------------------------");
console.log(dhBici.biciPorRodado(26));
console.log("--------------------------------");
dhBici.listarTodasLasBici();