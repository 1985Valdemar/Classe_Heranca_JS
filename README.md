<h1 align="center"> TURMA 1 - Treinamento K&L 💻 🛠️ 🚀 🛫 </h1>

# 🛠️ Bora Juntar Ferramentas Para Desenvolvimento

## 🚀 Bora Decolar Junto 

## 🛫 Bora Voar No Conhecimento

<p align="center"> <a href="https://kellab.com.br/" target="_blank">K&L</a> </p>

<p align="center">
<a href="#sobre">Sobre</a>&nbsp;&nbsp;&nbsp|&nbsp;&nbsp;&nbsp;
<a href="#tecnologia">Tecnologia</a>&nbsp;&nbsp;&nbsp|&nbsp;&nbsp;&nbsp;
<a href="#autores">Autores</a>.
</p>

# Sobre

## Treinamento Para Aprimorar Conhecimento
Este treinamento tem como base aprender e aprimorar conhecimento.

![Captura de tela 2024-09-24 140815](https://github.com/user-attachments/assets/6a8839bb-3a12-4cae-b4a0-d6ac13b39384)

<p align="center">Figura-07 Imagem Testando Código.</p>

### Exemplo de Código

```javascript
// CRIAR CLASSE PESSOA
class Pessoa {
    constructor(nome, dt_nascimento) {
        this.nome = nome;
        this.dt_nascimento = dt_nascimento;
    }

    imprimir() {
        return `${this.nome} ${this.dt_nascimento}`;
    }
}

// PERMITIR USAR DE FORA
module.exports = { Pessoa };
```
```javascript
// Chamar importação
const { Pessoa } = require('./pessoa');

// EXTENDS = HERDA DA CLASSE PESSOA OS DADOS
class PessoaFisica extends Pessoa {
    cpf;

    // Override reescrevendo
    imprimir() {
        // SUPER PUXA DADOS DA MAE
        console.log(`${super.imprimir()} CPF: ${this.cpf}`);
    }
}

// VAI LIBERAR O ACESSO EXTERNO
module.exports = { PessoaFisica };
```
```javascript
// Utilizando as classes
const { PessoaFisica } = require('./pessoaFisica');
const { PessoaJuridica } = require('./pessoaJuridica');

// Criar variável física para armazenar
let pf = new PessoaFisica('Frank', '14/04/2017');
pf.cpf = '053.555.798.85';

// Criar variável jurídica
let pj = new PessoaJuridica('K&L', '20/20/2024', '20202202020');
pj.cnpj = '15.462.356/0001-39';

// Chamando método para imprimir
pf.imprimir();
pj.imprimir();
```

# Tecnologia

Esse projeto foi desenvolvindo com as seguintes tecnologias:

- IDE VisualStudio Code
- Git e Github
- HTML
- CSS
- JavaScript

# Autores
- Valdemar

---

Agradecemos por visitar nosso site e esperamos que você para Realizar Seu Sonho! Se tiver alguma pergunta ou feedback, não hesite em entrar em contato conosco.

