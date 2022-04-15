'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function ehPalindromo(palavra) {
// não altere a linha acima

 /*
 * Complete o código abaixo para verificar se 
 * varíavel `palavra` é um palíndromo ou não.
 * Caso seja um palíndromo, a função deve retornar
 * `SIM, SOU UM PALÍNDROMO`, se não é um palídromo
 * a função deve retornar 
 * `INFELIZMENTE, NÃO SOU UM PALÍNDROMO`
 */
// escreva aqui seu código:
function checkPalindrome(str) {     
    for(var i = 0; i < str.length / 2; i++) if (str[i] != str[str.length - i - 1]) return false;
    return true;
}
console.log(checkPalindrome("radar"));
console.log(checkPalindrome("reviver"));
console.log(checkPalindrome("palindromo"));
    
 

    


// não altere as linhas abaixo
}

function main() {
