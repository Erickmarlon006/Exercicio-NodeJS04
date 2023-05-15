const entrada = require('prompt-sync')({sigint: true})
var num = entrada('Insira um número para saber o seu fatorial: ');
function fatorial(n){
    if(n == 1){
        return 1;
    }
    return n * fatorial(n - 1);


}
console.log("O Fatorial de " + num + " é " + fatorial(num));