const { veiculo } = require('./veiculo'); // Verifique o nome e caminho

class motos extends veiculo {
    constructor(Placa, Ano, cilindrada) {
        super(Placa, Ano);
        this.cilindrada = cilindrada;
    }
    
    imprimir() {
        console.log(`Moto: ${super.imprimir()} - Cilindrada: ${this.cilindrada}`);
    }
}

module.exports = { motos };
