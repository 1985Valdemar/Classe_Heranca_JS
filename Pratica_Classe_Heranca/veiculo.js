//CRIAR CLASSE PESSOA
class veiculo {
    constructor(Placa, Ano) {
        this.Placa = Placa;
        this.Ano = Ano;
    }
    imprimir() {
        return `${this.Placa} ${this.Ano}`;
    }
}

module.exports = { veiculo };
