var regexString = /JS/;
var regexConstrutor = new RegExp('J')

var stringTeste = 'Formação JavaScript Mestre JS Jedi'

console.log(regexString.test(stringTeste));// Encontrou a ocorrência 'JS' - true
console.log(regexConstrutor.exec(stringTeste))//volto um array de informação


//Recuperar todas as ocorrências
var expTodas = new RegExp("J", "igm")
var resultado = stringTeste.match(expTodas); //método match do obj String retorna um array com tadas as ocorrências

console.log("Quantidade encontradas: ", resultado.length)

for (let index = 0; index < resultado.length; index++) {
    var element = resultado[index];
    
    console.log(element)
}
