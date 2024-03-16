// 1) Observe o trecho de código abaixo:

// int INDICE = 13, SOMA = 0, K = 0;

// enquanto K < INDICE faça

// {

// K = K + 1;

// SOMA = SOMA + K;

// }

// imprimir(SOMA);



// Ao final do processamento, qual será o valor da variável SOMA?
console.log("O valor do exercicio é: ", 78)

// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.



// IMPORTANTE:

// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;


function checkIfNumberIsInSequence(n) {
    let a = 0;
    let b = 1;
    while (b <= n) {
        if (b === n) {
            console.log(n + " está na sequência de Fibonacci.");
        }
        let temp = b;
        b = a + b;
        a = temp;
    }
    console.log(n + " não está na sequência de Fibonacci.");
}

// 3) Descubra a lógica e complete o próximo elemento:

console.log("a) 9");
console.log("b) 128");
console.log("c) 49");
console.log("d) 100");
console.log("e) 13");
console.log("f) 20");

// 4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

// Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

console.log("Eu resolveria esse problema na seguinte ordem:")
console.log("Ligaria o primeiro interruptor e o manteria ligado por alguns minutos para aquecer a lâmpada associada a ele.")
console.log("Depois de alguns minutos, desligaria o primeiro interruptor e ligaria o segundo interruptor.")
console.log("Depois, entraria na sala das lâmpadas.")
console.log("A lâmpada que está acesa estaria associada ao interruptor que foi ligado  por alguns minutos (primeiro interruptor).")
console.log(
    "Tocaria na lâmpada que está acesa para sentir se ela está quente. " +
    "Se estiver quente, ela está associada ao primeiro interruptor. " +
    "Se estiver acesa, mas não quente, ela está associada ao segundo interruptor. " +
    "Se estiver apagada, estará associada ao terceiro interruptor."
  );
  
// 5) Escreva um programa que inverta os caracteres de um string.

function inverterString(str) {
    let invertedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertedString += str[i];
    }
    return invertedString;
}