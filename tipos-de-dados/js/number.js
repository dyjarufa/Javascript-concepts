var idade = 29;

console.log(idade)
console.log(typeof idade)

var precoFeijao = 2.58
console.log(precoFeijao)
console.log(typeof precoFeijao)

var valor = 23 + 33
console.log(valor)

var soma = "23" + 33 // String tem precedencia sobre number
console.log(soma)
console.log(typeof soma)

var soma2 = +"23" + 33 // Ao colocar o sinal de +, tranformo a string em number...
console.log(soma2)
console.log(typeof soma2)

var numero = -38
console.log(numero)

console.log(soma2 + numero)

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

console.log("=============")
console.log(soma2.toString(10))
console.log(soma2.toString(2))

console.log(soma2.toString(8))
console.log(soma2.toString(16))