const { veiculo } = require('./veiculo'); // Caminho correto

class carros extends veiculo { // Herança
    constructor(Placa, Ano, cor) {
        super(Placa, Ano); // Chama o construtor da classe pai
        this.cor = cor;
    }
    
    imprimir() {
        console.log(`Carro: ${super.imprimir() } - Cor: ${this.cor}`); // Chama o método imprimir da classe pai
    }
}

module.exports = { carros };
