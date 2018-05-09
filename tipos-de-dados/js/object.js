//Passagem de valor

//Forma Literal
var item1 = {}
var item2 = {nome: 'mouse', preco:75.32, ativo: true, detalhe: {detalhes: 'bla,bla,bla'} }

//Construtor
var pessoa = new Object();
pessoa.nome = 'Ben'
pessoa.idade = 10
pessoa.peso = 9.30

//Acessar
console.log(item2.nome);
console.log(item2['ativo']);
console.log(item2.detalhe.detalhes)

console.log(pessoa.nome)
console.log(pessoa.peso)



