//função Inicio
const prompt = require("prompt-sync")();
//Exercicio 1

function apresentAluno(){
    console.log("Exercício 1:");
    const nome = "Debian";
    const turma = "3°C";
    console.log(`meu nome é ${nome} e estou na turma ${turma}`);
}

//Exercicio 2

function calculaDobro(){
    console.log("Exercício 2:");
    let number1 = prompt("Qual vai ser o numero duplicado?");
    let resultado1 = number1*2;
    console.log(`O resultado é ${resultado1}`);
}

//Exercicio 3

function verificaIdade(){
    console.log("Exercício 3:");
    let idade1 = Number(prompt("Qual é a sua idade?"));
    if(idade1>=18){
        console.log("Você é maior de idade");
    }else{
        console.log("Você não é maior de idade");
    }
}

//Exercicio 4

function somaValores(){
    console.log("Exercício 4:");
    let sumando1 = Number(prompt("Qual será o primeiro valor?"));
    let sumando2 = Number(prompt("Qual será o segundo valor?"));
    let resultado2 = sumando1+sumando2;
    console.log(`O resultado é ${resultado2}`);
}

//Exercicio 5

function calculaMedia(){
    console.log("Exercício 5:");
    let media1 = Number(prompt("Qual foi a primeira nota?"));
    let media2 = Number(prompt("Qual foi a segunda nota?"));
    let media3 = Number(prompt("Qual foi a terceira nota?"));
    let resultado3 = (media1+media2+media3)/3;
    console.log(`O resultado é ${resultado3}`);
}

//Exercicio 6

function verificaPar(){
    console.log("Exercício 6:");
    let parameter = Number(prompt("Qual número será revisado?"));
    if(parameter%2==0){
        console.log(`${parameter} é par`);
    }else{
        console.log(`${parameter} é impar`);
    }
}

//retornar os resultados:

apresentAluno();
calculaDobro();
verificaIdade();
somaValores();
calculaMedia();
verificaPar();
