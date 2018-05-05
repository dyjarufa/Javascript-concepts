//declarar forma literal
var object = {nome: 'Ben', idade: 10, detalhes: {detalhe: 'blabla...'}}

console.log(object.nome);
console.log(object.detalhes.detalhe) //acesso um ojeto dentro de outro objeto

//construtor
var produto = new Object();
produto.nome = 'smartphone'
produto.valor = 3000.

console.log(produto.nome)
console.log(produto.valor)