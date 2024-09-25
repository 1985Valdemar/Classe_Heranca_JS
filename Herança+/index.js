class Pessoa {
    nome;
    sobrenome;
    idade;
    cpf;
    idade;
    celular;
    endereco;

}

class Endereco{
    logradouro;
    numero;
    complemento;
    bairro;
    cep;
    cidade;
    estado;
    pais;

}
let e1 = new Endereco();
e1.logradouro = 'Rua Bromelias';
e1.numero = 27;
e1.complemento = 'Casa A';
e1.bairro = 'Eucaliptos';
e1.cep = '83707390';
e1.cidade = 'Fazenda Rio Grande';
e1.estado = 'Paraná';
e1.pais = 'Brasil';


let p1 = new Pessoa();
p1.nome = 'Frank João';
p1.sobrenome = 'Velter Teider';
p1.idade = 7;
p1.cpf = '04311582968';
p1.celular = '41991147608';
p1.endereco = e1;

console.log(p1);