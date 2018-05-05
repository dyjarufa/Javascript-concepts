var contaStatus = true;
console.log(contaStatus)

if(contaStatus){
    console.log("Realizado com sucesso!")
}else {
    console.log("Envio de email")
}

console.log(!!contaStatus)


//Testando verdadeiro e falso
var nome = 'jady'
var preco = 5.28
var vazio = ''

console.log(!!nome)
console.log(!!preco)
console.log(!!vazio)

console.log("=======")

console.log(!!"")
console.log(!!0)
console.log(!!-0)
console.log(!!NaN)
console.log(!!null)
console.log(!!vazio)

console.log(!!Array)
console.log(!!Object)
console.log(!!Function)