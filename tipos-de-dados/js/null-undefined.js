var nome;
console.log(nome)

nome = 'Benício'
console.log(nome)
nome = null; //limpa variável

console.log("undefined == null:", undefined == null) //==, Verifica se o VALOR é igual
console.log("undefined === null:", undefined === null)//===, Veriffica se é estritamente igual(mesmo tipo)


//Testando objeto:

var pessoa = {nome: 'Kelly'}
console.log(pessoa.idade)//irá aparecer 'undefined' pois existe o objeto pessoa mas sem a propriedade 'idade'
//console.log(pessoa.idade.value)//erro apresentado pois não existe valor para essa propriedade

function soma(a, b){
    a + b 
}

console.log(soma(10,20))//O resultado será 'undefined' pois não esxiste retorno na função

function soma2(a,b){
    return a+b;
}

console.log(soma2(25,20)) //resultado apresentado pois existe retorno na função