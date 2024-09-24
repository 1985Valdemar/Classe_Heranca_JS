const { carros } = require('./carros');
const { motos } = require('./motos'); // Verifique se este arquivo está correto também

// Criar variável de carro
let carro1 = new carros('ABC1234', '2022');
carro1.cor = 'Azul';

// Criar variável de moto (certifique-se de que a classe motos está definida)
let moto1 = new motos('XYZ5678', '2023');
moto1.cilindrada = '250cc';

// Chamando o método para imprimir
carro1.imprimir();
moto1.imprimir();